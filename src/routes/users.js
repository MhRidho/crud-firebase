const users = require("express").Router();

const userController = require("../controllers/users");

users.get("/", userController.getAllUsers);
users.get("/:name", userController.getUserByName);
users.post("/", userController.createUser);
users.patch("/", userController.changeStatus);
users.delete("/", userController.deleteUser);

module.exports = users;
