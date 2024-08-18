import { mongooseConnect } from "../libs/mongoose";
import Cart from "../models/Cart";

const getCartByEmail = async (userEmail) => {
  try {
    await mongooseConnect();
    const cart = await Cart.find({ userEmail });
    const jsonCart = JSON.parse(JSON.stringify(cart));

    return jsonCart;
  } catch (err) {
    console.log(err);
  }
};

export default getCartByEmail;
