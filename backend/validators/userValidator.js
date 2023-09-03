const joi = require("joi");

// USER JOI MODEL  (A model for validation)
const model = joi.object({
  Name: joi.string(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).min(8),
  email: joi
    .string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "ir", "net", "org"] },
    }),
  pet: joi.string(),
  isAdmin: joi.boolean(),
  phoneNumber: joi.string().pattern(new RegExp("^09[0|1|2|3][0-9]{8}$")),
  address: joi.string(),
});

// export the models
module.exports = model;
