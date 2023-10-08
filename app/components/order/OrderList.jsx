"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

import clsx from "clsx";

const OrderList = ({ data, selected }) => {
  const router = useRouter();
  const goToDetailOrder = useCallback(() => {
    router.push(`/account/orders/${data._id}`);
  }, [data, router]);

  console.log(data);
  return (
    <div
      onClick={goToDetailOrder}
      className={clsx(
        `
      w-full 
      relative 
      flex 
      items-center 
      space-x-3 
      p-3 
      hover:bg-neutral-100
      rounded-lg
      transition
      cursor-pointer
      border
      border-gray-300
      mb-3
      `,
        selected ? "bg-neutral-100" : "bg-white"
      )}
    >
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <div className="flex justify-between items-center mb-1">
            <p className="text-md font-medium text-gray-900">
              {data._id.slice(0, 16)}...
            </p>

            <p
              className="
                text-md 
                text-gray-400 
              "
            >
              {data.createdAt.slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
