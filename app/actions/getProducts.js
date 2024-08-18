import { mongooseConnect } from '../libs/mongoose';
import Product from '../models/Product';

export const dynamic = 'force-dynamic';
export const revalidate = 1;
const getProducts = async () => {
  try {
    await mongooseConnect();
    const products = await Product.find();
    const jsonProducts = JSON.parse(JSON.stringify(products));
    return jsonProducts;
  } catch (err) {
    console.log(err);
  }
};

export default getProducts;
