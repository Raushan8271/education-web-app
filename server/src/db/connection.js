const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/education", {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("sucessful"))
    .catch((err) => console.log(err));