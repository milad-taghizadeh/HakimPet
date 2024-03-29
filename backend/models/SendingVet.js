// mongoose set up
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

// create the mongoose schema
const vetSchema = mongoose.Schema(
  {
    userId: { type: ObjectId, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

// export
module.exports = mongoose.model("Vet", vetSchema);
