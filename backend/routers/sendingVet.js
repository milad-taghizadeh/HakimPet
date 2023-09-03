const router = require("express").Router();
const Controller = require("../controllers/sendingVetController");

router.post("/", Controller.createSV);
router.put("/:id", Controller.updateSV);
router.delete("/:id", Controller.deleteSV);
router.get("/getByUser/:userid", Controller.getSVByUser);
router.get("/getById/:id", Controller.getSVById);
router.get("/", Controller.getAllSV);

module.exports = router;
