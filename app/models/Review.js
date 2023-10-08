import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    name: { type: String, required: true, unique: false, maxlength: 48 },
    email: { type: String, required: true, unique: false, maxlength: 48 },
    avatar: { type: String },
    star: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
    desc: {
      type: String,
      required: true,
      maxlength: 108,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
