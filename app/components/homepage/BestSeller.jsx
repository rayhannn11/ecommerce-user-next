"use client";

import { useEffect, useState } from "react";
import ProductListComponent from "../ProductListComponent";

const BestSeller = ({ products }) => {
  const [populerProduct, setPopulerProduct] = useState(products);

  useEffect(() => {
    setPopulerProduct((prev) => [...prev].sort((a, b) => b.sold - a.sold));
  }, []);

  return (
    <div className="py-5 h-auto flex flex-col justify-center items-center mb-10">
      <div className="flex w-[91%] gap-10 flex-col">
        <h1 className="text-2xl font-bold">Best Seller</h1>
        <div className=" flex flex-wrap items-center justify-center gap-10 ">
          {populerProduct?.slice(0, 4).map((product) => (
            <ProductListComponent key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
