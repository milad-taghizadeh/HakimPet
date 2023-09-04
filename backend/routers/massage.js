const router = require("express").Router();
const Controller = require("../controllers/massageController");

router.post("/", Controller.createMassage);
router.put("/:id", Controller.updateMassage);
router.delete("/:id", Controller.deleteMassage);
router.get("/getByEmail", Controller.getMassageByEmail);
router.get("/", Controller.getAllMassages);

module.exports = router;
