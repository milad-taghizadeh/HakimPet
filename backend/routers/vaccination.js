const router = require("express").Router();
const Controller = require("../controllers/vaccinationController");

// create a Vaccination form
router.post("/", Controller.createVaccination);

// update a Vaccination form
router.put("/:id", Controller.updateVaccination);

// delete a Vaccination form
router.delete("/:id", Controller.deleteVaccination);

// get a Vaccination form by Id
router.get("/:id", Controller.getVaccinationById);

// get All Vaccination forms
router.get("/", Controller.getAllVaccination);

module.exports = router;
