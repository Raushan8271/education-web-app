import React from 'react'
import style from './Login.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Login() {
    return (
        <div className={style.mainDiv1}>
            <h1>Login...</h1>
            <div className={style.inputDiv}>
                <div style={{ margin: "10px auto" }}>
                    <TextField className={style.input} label="Email" variant="outlined" />
                </div>
                <div style={{ margin: "10px auto" }}>
                    <TextField className={style.input} label="Password" variant="outlined" type="password" />
                </div>
            </div>
            <Button variant="contained" color="primary">Login</Button>
        </div>
    )
}

export default Login
