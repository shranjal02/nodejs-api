const { Router } = require("express");
const todoController = require("../controller/todoController");
const router = Router();

router.get("/todos", todoController.getTodos);

module.exports = router;
