const express = require("express");
const controller = require("../controllers");

const router = express.Router();

// Definicion de todas las routes
router.post("/userCreate", controller.users.create);
router.get("/userAll", controller.users.all);
router.get("/userGet/:dni", controller.users.get);
router.put("/userUpdate/:dni", controller.users.update);
router.delete("/userRemove/:dni", controller.users.remove);

module.exports = router;
