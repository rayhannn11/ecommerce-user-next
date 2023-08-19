import { mongooseConnect } from "../libs/mongoose";
import Product from "../models/Product";

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
