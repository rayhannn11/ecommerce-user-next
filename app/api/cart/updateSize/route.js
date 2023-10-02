import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Cart from "../../../models/Cart";

export async function PUT(request) {
  await mongooseConnect();
  const body = await request.json();
  const { id, selectedSize } = body;

  console.log(id, selectedSize, "api");

  const cart = await Cart.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        "products.selectedSize": selectedSize,
      },
    }
  );

  return NextResponse.json(cart);
}
