import mongoose from "mongoose";
const { Schema } = mongoose;
const noteBookSchema = new Schema(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, required: true },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);
const noteBookModel = mongoose.model("user", noteBookSchema);
export default noteBookModel;
