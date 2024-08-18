import { mongooseConnect } from "../libs/mongoose";
import Review from "../models/Review";

const getReview = async (productId) => {
  try {
    await mongooseConnect();
    const review = await Review.find({ productId });
    const jsonReview = JSON.parse(JSON.stringify(review));
    return jsonReview;
  } catch (err) {
    console.log(err);
  }
};

export default getReview;
