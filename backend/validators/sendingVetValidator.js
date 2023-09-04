const joi = require("joi");

// USER JOI MODEL  (A model for validation)
const model = joi.object({
  userId: joi.string(),
  date: joi.date(),
});

// export the models
module.exports = model;
