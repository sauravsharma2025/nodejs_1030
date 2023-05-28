import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    contactNumber: { type: String, required: true },
    isActive: { type: String, required: true },
  },
  { timestamps: true }
);
const userModel = mongoose.model("user", userSchema);
export default userModel;
