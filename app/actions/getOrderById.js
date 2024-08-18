import { mongooseConnect } from "../libs/mongoose";
import Order from "../models/Order";

const getOrderById = async (id) => {
  try {
    await mongooseConnect();
    const order = await Order.findById(id);
    const jsonOrder = JSON.parse(JSON.stringify(order));

    return jsonOrder;
  } catch (err) {
    console.log(err);
  }
};

export default getOrderById;
