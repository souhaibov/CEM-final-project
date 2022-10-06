const express = require("express")
const Coachs = require("../model/Coachs")
const Coachsroute = express.Router()

// GET :  RETURN ALL Coachs
// http://localhost:5000/events

Coachsroute.get("/", async (req, res) => {
    try {
      const result = await Coachs.find();
      res.send(result);
    } catch (error) {
      console.log("can't find Coachs");
    }
  });
  
  // POST :  ADD A NEW Coachs TO THE DATABASE 
  // http://localhost:5000/events/add
  
  Coachsroute.post("/add", async (req, res) => {
    const newCoach = new Coachs(req.body);
    const result = await newCoach.save();
    res.send(result);
  });
  
  // PUT : EDIT AN Coachs BY ID
  // http://localhost:5000/events/update/
  
  Coachsroute.put("/update/:id", async (req, res) => {
      try {
        const result = await Coachs.findByIdAndUpdate({_id: req.params.id},{$set:req.body},{new:true});
        res.send({Coachs:result, msg:"Coachs updated"});
      } catch (error) {
        console.log("can't update Coach");
      }
    });
  
  //  DELETE : REMOVE AN Coachs BY ID
  //  http://localhost:5000/events/delete/
  
  Coachsroute.delete("/delete/:id", async (req, res) => {
      try {
        const result = await Coachs.findByIdAndRemove({_id: req.params.id});
        res.send({Coachs:result, msg:"Coachs deleted"});
      } catch (error) {
        console.log("can't delete Coachs");
      }
    });


module.exports = Coachsroute;
