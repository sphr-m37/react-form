import { useState } from 'react';

import styles from '../Form.module.css';

export const Register = ({ toggleForm, setToggleForm }) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: false,
    });
    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [submited, setSubmited] = useState(false)
    let [alertText, setAlertText] = useState('')


    const onChangeHandler = (e) => {
        if (e.target.name === 'agree') {
            setValues({ ...values, agree: e.target.checked });
        } else {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
        setError({ ...error, [e.target.name]: '' })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        let newErrors = {};
        for (let key in values) {
            if (!values[key] && key !== 'agree') {
                newErrors[key] = 'required';
            }
        }
        setError(newErrors);
        const errors = [...Object.keys(newErrors)]
        if (errors.length === 0 && values.password == values.confirmPassword) {
            setAlertText('thank you for join us')
            setSubmited(true)
            // ... call API
            // setSubmited(false)
            // clean set time out below
            setTimeout(() => {
                setSubmited(false)
            }, 3000);

        } else if (errors.length > 0) {
            setAlertText('please copmlete requierd fields')
            showAlert()

        } else if (values.password !== values.confirmPassword) {
            setAlertText('Passwords do not match')
            showAlert()

        }
    };

    const showAlert = () => {
        setSubmited(true, setTimeout(() => {
                setSubmited(false)
        }, 3000))}
        

    return (
        <>
            <h2 className={`${styles.alert} ${submited && styles.showAlert}`}>{alertText}</h2>
            <form className={styles.signup} onSubmit={(e) => submitHandler(e)}>
                <h2 className={styles.formTitle}>sign up</h2>
                <input
                    autoComplete='off'
                    type='text'
                    name='firstName'
                    placeholder='user name'
                    value={values.firstName}
                    onChange={onChangeHandler}
                />
                <span className={`${styles.errorMessage} ${error.firstName && styles.showErrorMessage}`}>required</span>
                <input
                    autoComplete='off'
                    type='text'
                    name='lastName'
                    placeholder='last name'
                    value={values.lastName}
                    onChange={onChangeHandler}
                />
                <span className={`${styles.errorMessage} ${error.lastName && styles.showErrorMessage}`}>required</span>
                <input
                    autoComplete='off'
                    type='email'
                    name='email'
                    placeholder='email'
                    value={values.email}
                    onChange={onChangeHandler}
                />
                <span className={`${styles.errorMessage} ${error.email && styles.showErrorMessage}`}>required</span>
                <input
                    autoComplete='off'
                    type='password'
                    name='password'
                    placeholder='password'
                    value={values.password}
                    onChange={onChangeHandler}

                />
                <span className={`${styles.errorMessage} ${error.password && styles.showErrorMessage}`}>required</span>
                <input
                    autoComplete='off'
                    type='password'
                    name='confirmPassword'
                    placeholder='confirm password'
                    value={values.confirmPassword}
                    onChange={onChangeHandler}
                />
                <span className={`${styles.errorMessage} ${error.confirmPassword && styles.showErrorMessage}`}>required</span>
                <div className={styles.remember}>
                    <label htmlFor='agree'>I have read and agree </label>
                    <input
                        type='checkbox'
                        id='agree'
                        name='agree'
                        onChange={e => setValues({ ...values, agree: e.target.checked })}
                        checked={values.agree}
                    />
                </div>
                <button type='submit' className={styles.signinBtn} disabled={!values.agree || submited} >sign up</button>
                <div className={styles.links}>
                    <a href="#">forget password</a>
                    <a onClick={() => setToggleForm(!toggleForm)}>sign in</a>
                </div>

            </form>
        </>);
};

