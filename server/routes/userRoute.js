const express = require("express");
const Router = express.Router();
const UserController = require("../controllers/UserController");

Router.get(
  "/getuser",
  UserController.authMiddleware,
  UserController.getUserByEmail
);
Router.post(
  "/createuser",
  UserController.authMiddleware,
  UserController.addUsers
);

Router.get("/getevents/:id", UserController.getEventById);

const UserRoutes = Router;
module.exports = UserRoutes;
