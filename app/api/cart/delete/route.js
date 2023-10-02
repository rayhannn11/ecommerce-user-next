import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Cart from "../../../models/Cart";

export async function DELETE(request) {
  await mongooseConnect();
  const body = await request.json();
  const { userEmail } = body;

  const cart = await Cart.deleteMany({ userEmail });
  return NextResponse.json(cart);
}
