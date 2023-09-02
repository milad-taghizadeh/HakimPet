// mongoose set up
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

// create the mongoose schema
const vaccineSchema = mongoose.Schema(
  {
    userId: { type: ObjectId },
    lastVaccineDate: { type: Date },
    vaccineName: { type: String },
  },
  { timestamps: true }
);

// export
module.exports = mongoose.model("Vaccination", vaccineSchema);
