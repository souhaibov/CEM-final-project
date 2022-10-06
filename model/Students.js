const mongoose= require('mongoose')
const StudentsSchema= new mongoose.Schema({

Name:{type:String ,required:true},
Poster:{type:String ,required:true},
Age:{type:Number ,required:true},
})

module.exports=mongoose.model('Students', StudentsSchema)