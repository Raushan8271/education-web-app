import React, { useState } from 'react'
import style from './Login.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const loginForm = async () => {
        if (email.trim().length > 0 && password.trim().length > 0) {
            try {
                const match = await axios.post('http://localhost:2345/login', {
                    email: email,
                    password: password
                })
                // console.log(match)
                alert("Login Successful")

            } catch (e) {
                alert("Invalid Username or Password")
                console.log(e)
            }

        } else {
            alert("input field is empty")
        }

    }
    return (
        <div className={style.mainDiv1}>
            <h1>Login...</h1>
            <div className={style.inputDiv}>
                <div style={{ margin: "10px auto" }}>
                    <TextField onChange={e => setEmail(e.target.value)} className={style.input} label="Email" variant="outlined" />
                </div>
                <div style={{ margin: "10px auto" }}>
                    <TextField onChange={e => setPassword(e.target.value)} className={style.input} label="Password" variant="outlined" type="password" />
                </div>
            </div>
            <Button onClick={loginForm} variant="contained" color="primary">Login</Button>
        </div>
    )
}

export default Login
