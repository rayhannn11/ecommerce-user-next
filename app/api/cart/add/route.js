import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Cart from "../../../models/Cart";

export async function POST(request) {
  await mongooseConnect();
  const body = await request.json();

  const cart = await Cart.create(body);
  return NextResponse.json(cart);
}
