const SV = require("../models/SendingVet");
const validator = require("../validators/sendingVetValidator");

// create sendingVet form
const createSV = async (req, res) => {
  try {
    // check if there is a body
    if (!req.body) {
      return res
        .status(400)
        .json({ massage: "the request does'nt have a body" });
    }

    // validate the input
    await validator.validateAsync(req.body);

    // create the user record.
    const sv = new SV(req.body);

    // save to DB
    const savedSV = await sv.save();

    // set the response
    res.status(200).json(savedSV);
  } catch (err) {
    // return the err if there is one
    res.status(502).json(err);
  }
};

// update sendingVet form
const updateSV = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .json({ massage: "the request does'nt have a body" });
    if (!req.params.id)
      return res
        .status(400)
        .json({ massage: "the request does'nt have an id params" });

    // validate input
    await validator.validateAsync(req.body);

    //update the record
    const updatedSV = await SV.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    // set the response
    res.status(200).json(updateSV);
  } catch (err) {
    // return an err if there is one
    res.status(502).json(err);
  }
};

// delete sendingVet form
const deleteSV = async (req, res) => {
  try {
    if (!req.params.id)
      return res
        .status(400)
        .json({ massage: "the request does'nt have an id params" });

    // find the SV by id and delete.
    const deletedSV = await SV.findByIdAndDelete(req.params.id);

    // set the response
    if (deletedSV == null)
      return res.status(404).json("there is no sending Vet Form with that Id");

    res.status(200).json("sending vet Form deleted successfully !");
  } catch (err) {
    // return an err if there is one
    res.status(502).json(err);
  }
};

//   get sendingVet form by its Id
const getSVById = async (req, res) => {
  try {
    if (!req.params.id)
      return res
        .status(400)
        .json({ massage: "the request does'nt have an id params" });

    // find the comment by id
    const sv = SV.findById(req.params.id);

    // set response
    if (sv == null)
      return res.status(404).json("there is no sending Vet Form with that Id");

    res.status(200).json(sv);
  } catch (err) {
    // return an err if there is one
    res.status(502).json(err);
  }
};

// get All sendingVet form by the user
const getSVByUser = async (req, res) => {
  try {
    if (!req.params.userid)
      return res
        .status(400)
        .json({ massage: "the request does'nt have an userid params" });

    // find the records
    const userSV = await SV.find({ userId: req.params.userid });

    // set the response
    if (userSV == null)
      return res
        .status(404)
        .json("there is no sending Vet Form with that userId");

    res.status(200).json(userSV);
  } catch (err) {
    // return an err if there is one
    res.status(502).json(err);
  }
};

// get All sendingVet form
const getAllSV = async (req, res) => {
  try {
    // find All sendingVet form
    const sv = await SV.find();

    // set the response
    res.status(200).json(sv);
  } catch (err) {
    // return an err if there is one
    res.status(502).json(err);
  }
};

module.exports = {
  createSV,
  updateSV,
  deleteSV,
  getAllSV,
  getSVById,
  getSVByUser,
};
