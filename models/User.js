const mongoose = require('mongoose')

const { Schema, model } = mongoose;

//create user schema
const userSchema = new Schema({
    fullName: { type: String, required: true},
    IdCard:{type: Number, required: true},
    age: { type: Number , required: false},
    email: { type: String, unique:true},
    address: { type: String , required: false},   
});

module.exports = User = mongoose.model('User', userSchema)

