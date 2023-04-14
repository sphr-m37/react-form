import { useState } from 'react';

import styles from '../Form.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

export const Login = ({ setToggleForm, toggleForm }) => {
  const location = useLocation()
  const navTo = useNavigate()
  const [values, setValues] = useState({
    userName: '',
    password: '',
    remember: false
  });
  const [error, setError] = useState({
    userName: '',
    password: ''
  });
  const [submited, setSubmited] = useState(false)
  let [alertText, setAlertText] = useState('')


  const onChangeHandler = (e) => {
    if (e.target.name === 'remember') {
      setValues({ ...values, remember: e.target.checked });
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
      if (!values[key] && key !== 'remember') {
        newErrors[key] = 'required';
      }
    }
    setError(newErrors);
    const errors = [...Object.keys(newErrors)]
    if (errors.length === 0) {
      if (values.userName === 'admin' && values.password === 'password') {
        localStorage.setItem('admin', JSON.stringify([values.userName, values.password]))
        setAlertText(`welcome ${values.userName}`)
        setSubmited(true, setTimeout(() => {
          setSubmited(false)
          navTo(location.state.pathname)
        }, 3000))
      }
      else {
        setAlertText('wrong username or password')
        showAlert()
      }
    } else {
      setAlertText('please complete fields')
      showAlert()
    }
  };
  const showAlert = () => {
    setSubmited(true, setTimeout(() => {
      setSubmited(false)
    }, 3000))
}

  return (<>
    <h2 className={`${styles.alert} ${submited && styles.showAlert}`}>{alertText}</h2>
    <form className={styles.signin} onSubmit={(e) => submitHandler(e)}>
      <h2 className={styles.formTitle}>sign in</h2>
      <input
        autoComplete='off'
        type='text'
        name='userName'
        placeholder='user name'
        value={values.userName}
        onChange={onChangeHandler}
      />
      <span className={`${styles.errorMessage} ${error.userName && styles.showErrorMessage}`}>required</span>
      <input
        autoComplete='off'
        type='password'
        name='password'
        placeholder='password'
        value={values.password}
        onChange={onChangeHandler}
      />
      <span className={`${styles.errorMessage} ${error.password && styles.showErrorMessage}`}>required</span>
      <div className={styles.remember}>
        <label htmlFor='remember'>{values.remember ? 'dont remember' : ' remember me'}</label>
        <input
          type='checkbox'
          id='remember'
          name='remember'
          onChange={onChangeHandler}
          value={values.checked}
        />
      </div>
      <button type='submit' disabled={submited} className={styles.signinBtn}>sign in</button>
      <div className={styles.links}>
        <a href="#">forget password</a>
        <a href="#" onClick={() => setToggleForm(!toggleForm)}>sign up</a>
      </div>
    </form>
  </>);
};

