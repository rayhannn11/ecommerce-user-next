import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Products from "../../../models/Product";

export async function GET(request) {
  await mongooseConnect();
  const body = await request.json();
  const { title } = body;

  const products = await Products.find({ title });

  return NextResponse.json(products);
}
