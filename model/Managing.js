const mongoose= require('mongoose')
const ManagingSchema= new mongoose.Schema({

Name:{type:String ,required:true},
Poster:{type:String ,required:true},
Statue:{type:String ,required:true},
Age:{type:Number ,required:true},
})

module.exports=mongoose.model('Managing', ManagingSchema)