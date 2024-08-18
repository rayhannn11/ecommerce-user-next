import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Product from "../../../models/Product";

export async function GET(request) {
  await mongooseConnect();
  const brand = request.nextUrl.searchParams.get("brand");
  const size = request.nextUrl.searchParams.get("size");
  const categories = request.nextUrl.searchParams.get("categories");
  const search = request.nextUrl.searchParams.get("search");

  const filters = {
    ...(categories && { categories: categories }),
    ...(brand && { brand: brand }),
    ...(size && { size: size }),
    ...(search && { title: { $regex: search, $options: "i" } }),
  };

  const product = await Product.find(filters);

  return NextResponse.json(product);
}
