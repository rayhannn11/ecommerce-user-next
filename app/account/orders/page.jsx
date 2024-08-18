"use client";

import clsx from "clsx";

import useSeeOrder from "../../hooks/useSeeOrder";
import EmptyState from "../../components/order/EmptyState";

const Home = () => {
  const { isOpen } = useSeeOrder();

  return (
    <div
      className={clsx(`lg:pl-80 h-full lg:block`, isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};

export default Home;
