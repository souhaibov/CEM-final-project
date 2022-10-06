const express = require("express")
const Students = require("../model/Students")
const Studentsroute = express.Router()

// GET :  RETURN ALL Students
// http://localhost:5000/Students

Studentsroute.get("/", async (req, res) => {
    try {
      const result = await Students.find();
      res.send(result);
    } catch (error) {
      console.log("can't find Students");
    }
  });
  
  // POST :  ADD A NEW Students TO THE DATABASE 
  // http://localhost:5000/Students/add
  
  Studentsroute.post("/add", async (req, res) => {
    const newStudents = new Students(req.body);
    const result = await newStudents.save();
    res.send(result);
  });
  
  // PUT : EDIT AN Students BY ID
  // http://localhost:5000/Students/update/
  
  Studentsroute.put("/update/:id", async (req, res) => {
      try {
        const result = await Students.findByIdAndUpdate({_id: req.params.id},{$set:req.body},{new:true});
        res.send({Students:result, msg:"Students updated"});
      } catch (error) {
        console.log("can't update Students");
      }
    });
  
  //  DELETE : REMOVE AN Students BY ID
  //  http://localhost:5000/Students/delete/
  
  Studentsroute.delete("/delete/:id", async (req, res) => {
      try {
        const result = await Students.findByIdAndRemove({_id: req.params.id});
        res.send({Students:result, msg:"Students deleted"});
      } catch (error) {
        console.log("can't delete Students");
      }
    });


module.exports = Studentsroute;
