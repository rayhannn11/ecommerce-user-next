import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Review from "../../../models/Review";
import Product from "../../../models/Product";

export async function POST(request) {
  await mongooseConnect();
  const body = await request.json();

  const findReview = await Review.findOne({
    productId: body.productId,
    email: body.email,
  });

  if (findReview) {
    return NextResponse.error(
      "You have already created a review for this product!"
    );
  }

  const review = await Review.create(body);

  if (review) {
    await Product.findByIdAndUpdate(body.productId, {
      $inc: { totalStars: body.star, countReviewers: 1 },
    });
  }

  return NextResponse.json(review);
}
