const mongoose= require('mongoose')
const CoachsSchema= new mongoose.Schema({

Name:{type:String ,required:true},
Poster:{type:String ,required:true},
Statue:{type:String ,required:true},
Description:{type:String ,required:true},
})

module.exports=mongoose.model('Coachs', CoachsSchema)