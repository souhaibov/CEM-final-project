const mongoose= require('mongoose')
const EventSchema= new mongoose.Schema({

Title:{type:String ,required:true},
tof:{type:String ,required:true},
place:{type:String ,required:true},
Date:{type:String ,required:true},
Description:{type:String ,required:true},
})

module.exports=mongoose.model('Events', EventSchema)