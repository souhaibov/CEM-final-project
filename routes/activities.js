const express = require("express")
const Activities = require("../model/Activities")
const Activityroute = express.Router()

//GET :  RETURN ALL USERS
//http://localhost:5000/activities/activity/

Activityroute.get("/activity", async (req, res) => {
    try {
      const result = await Activities.find();
      res.send(result);
    } catch (error) {
      console.log("can't find Activities");
    }
  });
  
  //POST :  ADD A NEW USER TO THE DATABASE 
  //http://localhost:5000/activities/activity/add
  
  Activityroute.post("/activity/add", async (req, res) => {
    const newActivities = new Activities(req.body);
    const result = await newActivities.save();
    res.send(result);
  });
  
  // PUT : EDIT A USER BY ID
  // http://localhost:5000/activities/activity/update/
  
  Activityroute.put("/activity/update/:id", async (req, res) => {
      try {
        const result = await Activities.findByIdAndUpdate({_id: req.params.id},{$set:req.body},{new:true});
        res.send({Activities:result, msg:"Activity updated"});
      } catch (error) {
        console.log("can't update Activities");
      }
    });
  
  //  DELETE : REMOVE A USER BY ID
  //  http://localhost:5000/activities/activity/delete/
  
  Activityroute.delete("/activity/delete/:id", async (req, res) => {
      try {
        const result = await Activities.findByIdAndRemove({_id: req.params.id});
        res.send({Activities:result, msg:"Activities deleted"});
      } catch (error) {
        console.log("can't delete Activities");
      }
    });


module.exports = Activityroute;
