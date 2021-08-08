const mongoose = require('mongoose')

const registerFrom = new mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const Register = new mongoose.model("Register", registerFrom)

module.exports = Register