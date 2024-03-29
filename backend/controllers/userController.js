// dependency imports
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const validate = require("../validators/userValidator");

// update User
const updateUserController = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .json({ massage: "the request doesn't have a body" });

    // validate JOI
    await validate.validateAsync(req.body);

    // encrypt the Password if there is one
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC_KEY
      ).toString();
    }

    // find the User by ID and update it
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    // set the response
    res.status(200).json(updatedUser);
  } catch (err) {
    // return the err if there is one
    res.status(502).json(err);
  }
};

// delete User
const deleteUserController = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .json({ massage: "the request doesn't have a body" });

    // find By Id And Delete the User
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    // set the response
    if (deletedUser == null)
      return res.status(200).json({ massage: "there is No User with that Id" });

    res.status(200).json({ massage: "User has been deleted...", deletedUser });
  } catch (err) {
    // return the err if there is one
    res.status(502).json(err);
  }
};

// get User By Id
const getUserByIdController = async (req, res) => {
  try {
    if (!req.params.id)
      return res
        .status(400)
        .json({ massage: "the request doesn't have an id params" });

    // find the User By the ID
    const user = await User.findById(req.params.id);

    // split the from the object
    const { password, ...others } = user._doc;

    // set the response
    res.status(200).json(others);
  } catch (err) {
    // return the err if there is one
    res.status(502).json(err);
  }
};

// get All Users
const getAllUsersController = async (req, res) => {
  // Define queries
  const query = req.query.new;

  try {
    // define the response
    let users;

    //if there is "NEW" query
    if (query) {
      // return the newest Users
      users = await User.find().sort({ _id: -1 }).limit(query);
    } else {
      //return ALL
      users = await User.find();
    }

    // set the response
    res.status(200).json(users);
  } catch (err) {
    // return the err if there is one
    res.status(502).json(err);
  }
};

// export functions
module.exports = {
  updateUserController,
  deleteUserController,
  getUserByIdController,
  getAllUsersController,
};
