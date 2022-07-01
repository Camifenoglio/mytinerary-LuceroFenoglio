const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    image: {type:String, required:true},
    password:{type:Array, required:true},
    from: {type:Array},
    uniqueString: {type:String, required: true},
    verification: {type:Boolean, required:true}
})

const User= mongoose.model('users', userSchema)
module.exports = User