import { required } from "joi";
import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
