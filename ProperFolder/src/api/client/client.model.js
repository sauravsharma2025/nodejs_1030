import mongoose from "mongoose";
const { Schema } = mongoose;
const clientSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);
const clientModel = mongoose.model("client", clientSchema);
export default clientModel;
