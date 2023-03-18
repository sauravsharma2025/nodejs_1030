import mongoose from "mongoose";
export const initDBConnection = () => {
  return mongoose
    .connect("mongodb://localhost:27017/myDB")
    .then(() => {
      console.log("SK@DB Connection Successful");
    })
    .catch((err) => console.log("SK@", err));
};
