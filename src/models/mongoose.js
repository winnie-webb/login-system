const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DB_CONN,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log("Connected to Database"))
.catch(error => console.log(error.message) );