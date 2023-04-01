const router = require("express").Router();
const userController = require("../controllers/users");

router.use("/users", require("./users"));

module.exports = router;
