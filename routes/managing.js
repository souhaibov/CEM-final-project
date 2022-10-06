const express = require("express")
const Managing = require("../model/Managing")
const Managingroute = express.Router()

// GET :  RETURN ALL Managing
// http://localhost:5000/events

Managingroute.get("/", async (req, res) => {
    try {
      const result = await Managing.find();
      res.send(result);
    } catch (error) {
      console.log("can't find Managing");
    }
  });
  
  // POST :  ADD A NEW Managing TO THE DATABASE 
  // http://localhost:5000/events/add
  
  Managingroute.post("/add", async (req, res) => {
    const newManaging = new Managing(req.body);
    const result = await newManaging.save();
    res.send(result);
  });
  
  // PUT : EDIT AN Managing BY ID
  // http://localhost:5000/events/update/
  
  Managingroute.put("/update/:id", async (req, res) => {
      try {
        const result = await Managing.findByIdAndUpdate({_id: req.params.id},{$set:req.body},{new:true});
        res.send({Managing:result, msg:"Managing updated"});
      } catch (error) {
        console.log("can't update Managing");
      }
    });
  
  //  DELETE : REMOVE AN Managing BY ID
  //  http://localhost:5000/events/delete/
  
  Managingroute.delete("/delete/:id", async (req, res) => {
      try {
        const result = await Managing.findByIdAndRemove({_id: req.params.id});
        res.send({Managing:result, msg:"Managing deleted"});
      } catch (error) {
        console.log("can't delete Managing");
      }
    });


module.exports = Managingroute;
