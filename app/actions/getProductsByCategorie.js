import { mongooseConnect } from "../libs/mongoose";
import Product from "../models/Product";

const getProductsByCategorie = async (categorie) => {
  try {
    await mongooseConnect();
    const products = await Product.find({
      categories: {
        $in: [categorie],
      },
    });
    const jsonProducts = JSON.parse(JSON.stringify(products));
    return jsonProducts;
  } catch (err) {
    console.log(err);
  }
};

export default getProductsByCategorie;
