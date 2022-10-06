const express = require("express")
const Events = require("../model/Events")
const Eventsroute = express.Router()

// GET :  RETURN ALL EVENTS
// http://localhost:5000/events

Eventsroute.get("/", async (req, res) => {
    try {
      const result = await Events.find();
      res.send(result);
    } catch (error) {
      console.log("can't find Events");
    }
  });
  
  // POST :  ADD A NEW EVENT TO THE DATABASE 
  // http://localhost:5000/events/add
  
  Eventsroute.post("/add", async (req, res) => {
    const newEvent = new Events(req.body);
    const result = await newEvent.save();
    res.send(result);
  });
  
  // PUT : EDIT AN Event BY ID
  // http://localhost:5000/events/update/
  
  Eventsroute.put("/update/:id", async (req, res) => {
      try {
        const result = await Events.findByIdAndUpdate({_id: req.params.id},{$set:req.body},{new:true});
        res.send({Events:result, msg:"Events updated"});
      } catch (error) {
        console.log("can't update Events");
      }
    });
  
  //  DELETE : REMOVE AN Event BY ID
  //  http://localhost:5000/events/delete/
  
  Eventsroute.delete("/delete/:id", async (req, res) => {
      try {
        const result = await Events.findByIdAndRemove({_id: req.params.id});
        res.send({Events:result, msg:"Events deleted"});
      } catch (error) {
        console.log("can't delete Events");
      }
    });


module.exports = Eventsroute;
