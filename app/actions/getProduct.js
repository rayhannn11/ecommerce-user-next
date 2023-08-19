import { mongooseConnect } from "../libs/mongoose";
import Product from "../models/Product";

const getProduct = async (id) => {
  try {
    await mongooseConnect();
    const product = await Product.findById(id);
    const jsonProduct = JSON.parse(JSON.stringify(product));
    return jsonProduct;
  } catch (err) {
    console.log(err);
  }
};

export default getProduct;
