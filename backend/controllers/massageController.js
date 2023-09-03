const Massage = require("../models/Massage");
const validator = require("../validators/massageValidator");

const createMassage = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .json({ massage: "the request does'nt have a body" });

    // validate the input
    await validator.validateAsync(req.body);

    // create the record
    const massage = new Massage(req.body);

    // save to DB
    const savedMassage = await massage.save();

    // set the response
    res.status(200).json(savedMassage);
  } catch (err) {
    // return the err if there is one
    res.status(502).json(err);
  }
};

const updateMassage = async (req, res) => {
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

    // find and update
    const updatedMassage = await Massage.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    // set the response
    res.status(200).json(updatedMassage);
  } catch (err) {
    // return the err if there is one
    console.log(err);
    res.status(502).json(err);
  }
};

const deleteMassage = async (req, res) => {
  try {
    if (!req.params.id)
      return res
        .status(400)
        .json({ massage: "the request does'nt have an id params" });

    //find massage and delete
    const deletedMassage = await Massage.findByIdAndDelete(req.params.id);

    //set the response
    if (deletedMassage == null)
      return res
        .status(404)
        .json({ massage: "there is no massage form with that Id" });

    res
      .status(200)
      .json({ deletedMassage, massage: "the massage has been deleted" });
  } catch (err) {
    // return the err if there is one
    res.status(502).json(err);
  }
};

const getMassageByEmail = async (req, res) => {
  try {
    if (!req.body.email)
      return res
        .status(400)
        .json({ massage: "the request does'nt have an email field in body" });

    // get All the massages
    const massages = await Massage.find({ email: req.body.email });

    //set the response
    res.status(200).json(massages);
  } catch (err) {
    // return the err if there is one
    res.status(502).json(err);
  }
};

const getAllMassages = async (req, res) => {
  try {
    // find All the massages
    const massages = await Massage.find();

    // set the response
    res.status(200).json(massages);
  } catch (err) {
    // return the err if there is one
    res.status(502).json(err);
  }
};

module.exports = {
  createMassage,
  updateMassage,
  deleteMassage,
  getAllMassages,
  getMassageByEmail,
};
