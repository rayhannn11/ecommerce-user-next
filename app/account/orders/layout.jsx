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
    <div className="min-h-full h-auto">
      <div className="h-full flex flex-col lg:flex-row ">
        <OrdersList initialItems={orders} />
        <div className="w-full min-h-full h-auto lg:w-[calc(100%-20rem)] border-l border-[#E5E7EB] flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
