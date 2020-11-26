const mongoose = require("mongoose");
const validator = require("validator");
const {Schema} = mongoose;

const UserSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("Email is invalid")
        }
    },
    password : {
        type : String,
    required : true,
    validate : (value) => {
    if(value.length < 8) throw new Error("Password too short");
    }
    }})
const User = mongoose.model("Users",UserSchema);

module.exports = User;