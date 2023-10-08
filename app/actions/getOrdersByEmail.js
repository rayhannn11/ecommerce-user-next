import { mongooseConnect } from "../libs/mongoose";
import Order from "../models/Order";

const getOrderByEmail = async (email) => {
  try {
    await mongooseConnect();
    const order = await Order.find({ email });
    const jsonOrder = JSON.parse(JSON.stringify(order));

    return jsonOrder;
  } catch (err) {
    console.log(err);
  }
};

export default getOrderByEmail;
