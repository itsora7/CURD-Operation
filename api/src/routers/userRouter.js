import express from "express";
import {
  deleteUserById,
  gettUsers,
  insertUser,
  updateUsers,
} from "../models/user/UserModel.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    //get all data from db and return to the client
    const users = await gettUsers();
    res.json({
      status: "success",
      message: "here are the users",
      users,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const result = await insertUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "here are the users",
        })
      : res.json({
          status: "error",
          message: "Unable to create user, Please try again later",
        });
  } catch (error) {
    let message = error.message;
    if (message.includes("E11000 duplicate key error collection")) {
      message = "There is another user already using this email.";
    }
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
router.put("/", async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    const filter = { _id };
    // const updateObj = { password };

    const result = await updateUsers(filter, rest);
    result?._id
      ? res.json({
          status: "success",
          message: "Updated Successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to update user, Please try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    // const filter = { _id };
    // const updateObj = { password };
    console.log(_id);
    const result = await deleteUserById(_id);
    result?._id
      ? res.json({
          status: "success",
          message: "Updated Successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to delete user, Please try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});

export default router;
