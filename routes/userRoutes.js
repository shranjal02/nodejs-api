const { Router } = require("express");
const userController = require("../controller/userController");
const router = Router();

router.get("/user/:id", userController.getUserById);

module.exports = router;
