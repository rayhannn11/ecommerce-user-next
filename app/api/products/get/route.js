import { mongooseConnect } from '../../../libs/mongoose';
import { NextResponse } from 'next/server';
import Products from '../../../models/Product';

export const dynamic = 'force-dynamic';
export const revalidate = 1;
export async function GET() {
  await mongooseConnect();
  const products = await Products.find();

  return NextResponse.json(products);
}
