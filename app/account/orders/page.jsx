"use client";

import clsx from "clsx";

import useSeeOrder from "../../hooks/useSeeOrder";
import EmptyState from "../../components/order/EmptyState";

const Home = () => {
  const { isOpen } = useSeeOrder();

  return (
    <div
      className={clsx(
        `h-full flex flex-col items-center justify-center  w-full lg:block`,
        isOpen ? "hidden" : "block"
      )}
    >
      <EmptyState />
    </div>
  );
};

export default Home;
