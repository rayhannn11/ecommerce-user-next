import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Cart from "../../../models/Cart";

export async function PUT(request) {
  await mongooseConnect();
  const body = await request.json();
  const { id, quantityItem } = body;

  const cart = await Cart.findByIdAndUpdate(id, {
    quantityItem,
  });

  return NextResponse.json(cart);
}
