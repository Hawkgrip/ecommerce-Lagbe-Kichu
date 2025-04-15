const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: { type:String, require: true, unique: true },
    password: { type:String, require: true},
    role: { type:String, require: true, enum: ['admin','seller','buyer']},
});

userSchema.pre('save', async function (next){
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10)
});

const User = mongoose.model(User, userSchema)
module.exports = User;