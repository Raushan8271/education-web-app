const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors())
require('./db/connection')
const Register = require('./models/register')
const { json } = require('express')
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello")
})

app.post("/register", async (req, res) => {
    try {
        const registerForm = new Register({
            fname: req.body.fname,
            email: req.body.email,
            password: req.body.password,
        })

        await registerForm.save()
        res.status(201).send("done")
    } catch (e) {
        res.status(400).send(e)
        // console.log(e)
    }
})

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const user = await Register.findOne({ email: email })
        if (password === user.password) {
            res.sendStatus(201)
        } else {
            res.sendStatus(400)
        }
    } catch (e) {
        console.log(e)
    }
})

app.listen(2345, () => {
    console.log("server is running on port 2345")
})