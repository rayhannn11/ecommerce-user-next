"use client";

import { useState } from "react";
import clsx from "clsx";

import useSeeOrder from "../../hooks/useSeeOrder";
import OrderList from "../../components/order/OrderList";

const OrdersList = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const { orderId, isOpen } = useSeeOrder();
  return (
    <aside
      className={clsx(
        `inset-y-0 pt-[4.4rem] w-full lg:w-80  overflow-y-auto block  left-0 `
      )}
    >
      <div className="px-5">
        <div className="mb-4 pt-4 text-2xl font-bold text-neutral-800">
          Pesanan Anda
        </div>
        {items.map((item) => (
          <OrderList
            key={item.id}
            data={item}
            selected={orderId === item._id}
          />
        ))}
      </div>
    </aside>
  );
};

export default OrdersList;
