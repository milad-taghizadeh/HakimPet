// mongoose set up
const mongoose = require("mongoose");

// create the mongoose schema
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    pet: { type: String, required: true },
    phoneNumber: { type: String, unique: true },
    email: { type: String, unique: true },
    address: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// export
module.exports = mongoose.model("User", userSchema);
