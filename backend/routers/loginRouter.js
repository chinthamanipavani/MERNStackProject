const express = require("express");
const { login } = require("../controllers/userControllers");

const loginRouter = express.Router();

loginRouter.post("/login", login);

module.exports = {loginRouter}