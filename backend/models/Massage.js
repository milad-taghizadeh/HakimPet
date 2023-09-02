// mongoose set up
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

// create the mongoose schema
const massageSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    text: { type: String },
  },
  { timestamps: true }
);

// export
module.exports = mongoose.model("massage", massageSchema);
