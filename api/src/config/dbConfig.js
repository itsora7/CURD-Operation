import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const mongoURL = "mongodb://127.0.0.1:27017/user_crud";
    const conn = mongoose.connect(mongoURL);

    conn
      ? console.log("Mongo connected!")
      : console.error("Unable to connect mongoz");
  } catch (error) {
    console.error(error);
  }
};
