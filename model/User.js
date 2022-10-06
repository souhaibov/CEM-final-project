const mongoose= require('mongoose')
const UserSchema= new mongoose.Schema({

first_name:{type:String ,required:true},
last_name:{type:String ,required:true},
phone_number:{type:Number ,required:true},
email:{type:String ,required:true},
password:{type:String ,required:true},
isAdmin:{type:Boolean ,default:false},
})

module.exports=mongoose.model('User', UserSchema)