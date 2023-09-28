"use client";

import { useEffect, useState } from "react";
import ProductListComponent from "../ProductListComponent";

const NewestProduct = ({ products }) => {
  const [newestProduct, setNewestProduct] = useState(products);

  useEffect(() => {
    let newArray = [...newestProduct];
    newArray.reverse();
    setNewestProduct(newArray);
  }, []);

  return (
    <div className="py-5 h-auto flex flex-col justify-center items-center mb-10">
      <div className="flex w-[91%] gap-10 flex-col">
        <h1 className="text-2xl font-bold">Newest Product</h1>

        <div className=" flex flex-wrap items-center justify-center gap-10 ">
          {newestProduct?.slice(0, 4).map((product) => (
            <ProductListComponent key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewestProduct;
