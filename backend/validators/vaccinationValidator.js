const joi = require("joi");

// USER JOI MODEL  (A model for validation)
const model = joi.object({
  userId: joi.string(),
  lastVaccineDate: joi.date(),
  vaccineName: joi.string(),
});

// export the models
module.exports = model;
