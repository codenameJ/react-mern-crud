let mongoose = require("mongoose");
let express = require("express");
let router = express.Router();

//Student model
let StudentSchema = require("../models/Student");

//Create Student
router.route("/create-student").post((req, res, next) => {
  StudentSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

//Read student

router.route("/").get((req, res) => {
  StudentSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

// Get Single Student

router.route("/edit-student/:id").get((req, res) => {
  StudentSchema.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

// Update Student
router.route("/update-student/:id").put((req, res, next) => {
  StudentSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, data) => {
      if (err) {
        return next(err);
        console.log(err);
      } else {
        res.json(data);
        console.log("Student Update Successfully");
      }
    }
  );
});

// Deleted Student
router.route("/delete-student/:id").delete((req, res, next) => {
  StudentSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json({ msg: data });
    }
  });
});

module.exports = router;
