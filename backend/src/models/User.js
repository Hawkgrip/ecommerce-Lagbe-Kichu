const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    email: { type:String, require: true, unique: true },
    password: { type:String, require: true},
    role: { type:String, require: true, enum: ['admin','seller','buyer']},
});
