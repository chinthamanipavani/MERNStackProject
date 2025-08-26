const express = require("express");
const { register, logoutAndDelete } = require("../controllers/userControllers");
const { verifyToken } = require("../middleware/authMiddleware");


const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.delete("/logout", verifyToken, logoutAndDelete);

module.exports = {userRouter}  