import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

const PORT = 8000;

//middlewares
app.use(express.json());
app.use(cors()); //allow cross origin access from different server frontend app
app.use(morgan("dev")); //log all the server request

//db connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();
//router
import userRouter from "./src/routers/userRouter.js";
app.use("/users", userRouter);

//request handler
app.use("/", (req, res) => {
  res.json({
    message: "hellow world",
  });
});

//run node app in the web server by using
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`server is spinning at http://localhost:${PORT}`);
});
