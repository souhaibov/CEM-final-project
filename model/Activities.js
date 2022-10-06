const mongoose= require('mongoose')
const ActivitySchema= new mongoose.Schema({

NumberOfStudents:{type:Number ,required:true},
tof:{type:String ,required:true},
place:{type:String ,required:true},
})

module.exports=mongoose.model('Activities', ActivitySchema)