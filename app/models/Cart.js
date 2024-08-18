import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true, unique: false },
    productId: {
      type: String,
    },
    title: { type: String },
    img: { type: String },
    categories: { type: Array },
    brand: { type: Array },
    size: { type: Array },
    price: { type: Number },
    countInStock: {
      type: Number,
      default: 1,
    },
    quantityItem: {
      type: Number,
      default: 1,
    },
    selectedSize: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
