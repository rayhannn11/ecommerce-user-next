import { mongooseConnect } from '../../../libs/mongoose';
import { NextResponse } from 'next/server';
import Review from '../../../models/Review';
import Product from '../../../models/Product';
import Order from '../../../models/Order';

export async function POST(request) {
  await mongooseConnect();
  const body = await request.json();

  const findReview = await Review.findOne({
    productId: body.productId,
    email: body.email,
  });

  if (findReview) {
    return NextResponse.error(
      'You have already created a review for this product!'
    );
  }

  const review = await Review.create(body);

  if (review) {
    await Product.findByIdAndUpdate(body.productId, {
      $inc: { totalStars: body.star, countReviewers: 1 },
    });
    await Order.updateOne(
      { 'products.productId': body.productId },
      { $set: { 'products.$.isReview': 1 } }
    );
  }

  return NextResponse.json(review);
}
