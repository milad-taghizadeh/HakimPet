const Vaccination = require("../models/Vaccination");
const validator = require("../validators/vaccinationValidator");

// create vaccination form
const createVaccination = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .json({ massage: "the request does'nt have a body" });

    // validate the input
    await validator.validateAsync(req.body);

    // create the record
    const newVaccination = new Vaccination(req.body);

    // save to the db
    const savedVaccination = await newVaccination.save();

    // set the response
    res.status(200).json(savedVaccination);
  } catch (err) {
    // return the err if there is one
    res.status(502).json(err);
  }
};

// update vaccination form
const updateVaccination = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .json({ massage: "the request does'nt have a body" });
    if (!req.params.id)
      return res
        .status(400)
        .json({ massage: "the request does'nt have an id params" });

    //validate input
    await validator.validateAsync(req.body);

    const updatedVaccination = await Vaccination.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    // set the response
    res.status(200).json(updatedVaccination);
  } catch (err) {
    // return an err if there is one
    res.status(502).json(err);
  }
};

// delete vaccination form
const deleteVaccination = async (req, res) => {
  try {
    if (!req.params.id)
      return res
        .status(400)
        .json({ massage: "the request does'nt have an id params" });

    // delete the record
    const deletedVaccination = await Vaccination.findByIdAndDelete(
      req.params.id
    );

    // set the response
    if (deletedVaccination == null)
      return res
        .status(404)
        .json({ massage: "there is no Vaccination form with that Id" });

    res.status(200).json("vaccination Form deleted successfully !");
  } catch (err) {
    // return an err if there is one
    console.log(err);
    res.status(502).json(err);
  }
};

// get All vaccination form
const getAllVaccination = async (req, res) => {
  try {
    // get All records
    const vaccination = await Vaccination.find();

    // set the response
    res.status(200).json(vaccination);
  } catch (err) {
    // return an err if there is one
    res.status(502).json(err);
  }
};

// get vaccination form by Id
const getVaccinationById = async (req, res) => {
  try {
    if (!req.params.id)
      return res
        .status(400)
        .json({ massage: "the request does'nt have an id params" });

    // get the record
    const vaccination = await Vaccination.findById(req.params.id);

    // set the response
    res.status(200).json(vaccination);
  } catch (err) {
    // return an err if there is one
    res.status(502).json(err);
  }
};

module.exports = {
  createVaccination,
  updateVaccination,
  deleteVaccination,
  getAllVaccination,
  getVaccinationById,
};
