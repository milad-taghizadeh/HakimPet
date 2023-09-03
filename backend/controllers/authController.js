// dependency imports
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const userValidation = require("../validators/userValidator");

// User register Controller (sign up)
const registerController = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json(" the request doesn't have a body ");

    // validate by Joi
    await userValidation.validateAsync(req.body);

    // create the user object
    const password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC_KEY
    ).toString();
    req.body.password = password;
    const newUser = new User(req.body);

    // save the user in DB
    const savedUser = await newUser.save();

    // set the response
    res.status(201).json(savedUser);
  } catch (err) {
    // return the err if there is one
    res.status(502).json(err);
    console.log(err);
  }
};

// user Login Controller
const logInController = async (req, res) => {
  try {
    // find the user By email
    const user = await User.findOne({
      email: req.body.email,
    });

    // if there is not a user with that info
    if (user == null) {
      res.status(401).json(" Wrong UserName or password !!");
    } else {
      // decrypt the PASSWORD from the DB user
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC_KEY
      );
      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      // get the Inputted PASSWORd
      const inputPassword = req.body.password;

      // create the access token
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC_key,
        { expiresIn: "1d" }
      );

      // split the PASSWORD from the object
      const { password, ...others } = user._doc;

      // if the password doesn't match
      if (inputPassword !== originalPassword) {
        res.status(401).json("Wrong UserName or password !!");
      } else {
        // if it maches we return the object without thw PASSWORD and the access token
        res
          .status(200)
          .cookie("accessToken", accessToken, { httpOnly: true })
          .json({ ...others });
      }
    }
  } catch (err) {
    // return the err if there is one
    res.status(502).json(err);
  }
};

// export the functions.
module.exports = { registerController, logInController };
