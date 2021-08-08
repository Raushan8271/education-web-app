import React from 'react'
import style from './Login.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Login({email,password,handleChange,handleChangeEmail,handleChangePass,handleSubmit}) {
    return (
        <div className={style.mainDiv1}>
            <h1>Login...</h1>
            <div className={style.inputDiv}>
                <div style={{ margin: "10px auto" }}>
                    <TextField className={style.input} label="Email" variant="outlined" value={email} onChange={handleChangeEmail}/>
                </div>
                <div style={{ margin: "10px auto" }}>
                    <TextField className={style.input} label="Password" variant="outlined" type="password" value={password} onChange={handleChangePass}/>
                </div>
            </div>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Login</Button>
        </div>
    )
}

export default Login
