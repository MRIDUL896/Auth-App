const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
},{timestamps : true})

const userModel = mongoose.model("pwskilluser",userSchema);
module.exports = userModel;