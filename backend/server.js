const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const connectDB = require("./config/db");
const { userRouter } = require("./routers/userRouters");
const { loginRouter } = require("./routers/loginRouter");
const jobRouter = require("./routers/jobRouter");
const defaultJobRouter = require("./routers/defaultJobRouter");
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

console.log(`MONGODB_URI: ${process.env.MONGODB_URI}`);
connectDB();

app.use("/", userRouter);
app.use("/", loginRouter);
app.use("/defaultJobs", jobRouter);
app.use("/api/defaultJobs", defaultJobRouter);

app.listen(port, () => {
  console.log(`server is running on port: http://localhost:${port}`);
});
