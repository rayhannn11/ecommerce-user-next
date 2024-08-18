import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Cart from "../../../models/Cart";

export async function DELETE(request) {
  await mongooseConnect();
  const body = await request.json();
  const { id } = body;

  const cart = await Cart.findByIdAndDelete(id);

  return NextResponse.json(cart);
}
