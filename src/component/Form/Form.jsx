import React, { useState } from 'react'
import { Login } from './Login/Login'
import { Register } from './Register/Register'
import styles from './Form.module.css';

export const Form = () => {
   
    const [toggleForm, setToggleForm] = useState(false)


    return (
        <div className={`${styles.formWrapper} ${toggleForm && styles.toggleForm}`}>
            <Login toggleForm={toggleForm} setToggleForm={setToggleForm} />
            <Register toggleForm={toggleForm} setToggleForm={setToggleForm} />
        </div>

    )
}
