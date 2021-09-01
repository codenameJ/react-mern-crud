const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StudentSchema = new Schema(
  {
    id: {
      type: Schema.ObjectId,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    rollno: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", StudentSchema);
