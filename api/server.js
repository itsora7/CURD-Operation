import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

const PORT = 8000;

//middlewares
app.use(cors());
app.use(morgan());

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
