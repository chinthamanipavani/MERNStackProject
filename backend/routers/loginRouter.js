const express = require("express");
const { login } = require("../controllers/userControllers");
const { logoutAndDelete } = require("../controllers/userControllers");


const loginRouter = express.Router();

loginRouter.post("/login", login);
loginRouter.delete("/logout", logoutAndDelete); 


module.exports = {loginRouter}