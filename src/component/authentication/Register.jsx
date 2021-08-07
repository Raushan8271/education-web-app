import React, { useState } from 'react'
import style from './Register.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

function Register() {
    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const registerForm = async () => {
        if (fname.trim().length > 0 && email.trim().length > 0 && password.trim().length > 0) {
            try {
                const data = await axios.post('http://localhost:2345/register', {
                    fname: fname,
                    email: email,
                    password: password
                })
            } catch (e) {
                alert("Something went wrong")
                console.log(e)
            }

        } else {
            alert("input field is empty")
        }

    }
    return (
        <div className={style.mainDiv}>
            <h1>Register...</h1>
            <div className={style.inputDiv}>
                <div style={{ margin: "10px auto" }}>
                    <TextField onChange={e => setFname(e.target.value)} className={style.input} label="Full Name" variant="outlined" />
                </div>
                <div style={{ margin: "10px auto" }}>
                    <TextField onChange={e => setEmail(e.target.value)} className={style.input} label="Email" variant="outlined" />
                </div>
                <div style={{ margin: "10px auto" }}>
                    <TextField onChange={e => setPassword(e.target.value)} className={style.input} label="Password" variant="outlined" type="password" />
                </div>
            </div >
            <Button onClick={registerForm} variant="contained" color="primary">Register</Button>
        </div >
    )
}

export default Register
