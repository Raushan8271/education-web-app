import React from 'react'
import style from './Register.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Register() {
    return (
        <div className={style.mainDiv}>
            <h1>Register...</h1>
            <div className={style.inputDiv}>
                <div style={{ margin: "10px auto" }}>
                    <TextField className={style.input} label="Full Name" variant="outlined" />
                </div>
                <div style={{ margin: "10px auto" }}>
                    <TextField className={style.input} label="Email" variant="outlined" />
                </div>
                <div style={{ margin: "10px auto" }}>
                    <TextField className={style.input} label="Password" variant="outlined" type="password" />
                </div>
            </div >
            <Button variant="contained" color="primary">Register</Button>
        </div >
    )
}

export default Register
