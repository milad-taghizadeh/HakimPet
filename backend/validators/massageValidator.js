const joi = require("joi");

// USER JOI MODEL  (A model for validation)
const model = joi.object({
  name: joi.string(),
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "ir", "net", "org"] },
  }),
  text: joi.string(),
});

// export the models
module.exports = model;
