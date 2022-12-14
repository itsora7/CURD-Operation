import UserSchema from "./UserSchema.js";

//create
export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};
//read
export const gettUsers = () => {
  return UserSchema.find();
};
//update, filter, updateObj must be an object
export const updateUsers = (filter, updateObj) => {
  return UserSchema.findOneAndUpdate(filter, updateObj, { new: true }); // {new:true} returns data after updating the database
};
// //delete
// export const deleteUser = (filter) => {
//   return UserSchema.findOneAndDelete(filter);
// };
//_id must be an string
export const deleteUserById = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
