const {Router} = require("express");
const {getUsers, getUserByID, createUser} = require("../handlers/users");

const mainRouter = Router();

mainRouter.get("/", getUsers);
mainRouter.get("/:id", getUserByID);
mainRouter.post("/", createUser);

module.exports = mainRouter;
