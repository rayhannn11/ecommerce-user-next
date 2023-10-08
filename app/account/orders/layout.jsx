import OrdersList from "../../components/order/OrdersList";
import getSession from "../../actions/getSession";
import getOrdersByEmail from "../../actions/getOrdersByEmail";

export const metadata = {
  title: "Semua Pesanan",
  description: "List pesanan anda",
};

export default async function ConversationsLayout({ children }) {
  const session = await getSession();
  const orders = await getOrdersByEmail(session?.user?.email);
  console.log(orders);

  return (
    <div className="h-full h-auto">
      <div className="h-full  ">
        <OrdersList initialItems={orders} />
        {children}
      </div>
    </div>
  );
}
