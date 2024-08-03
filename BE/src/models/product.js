import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // lowercase: true,
      index: true,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    about: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: String,
    gallery: [String],
    description: String,
    discount: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      default: 0,
    },
    featured: Boolean,
    tags: [String],
    attributes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attribute",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate);
export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
