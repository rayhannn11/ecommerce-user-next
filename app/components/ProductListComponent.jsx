import Image from "next/image";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const ProductListComponent = ({ product }) => {
  var nf = new Intl.NumberFormat();
  return (
    <div
      className="flex  h-[28rem] items-center justify-center flex-col  flex-1 w-[28rem]  bg-[#f6f6f6]  border border-[#f2f0f0] relative"
      key={product._id}
    >
      <div className="flex items-center justify-center ">
        <img
          src={product?.img.at(0) || <Skeleton />}
          alt="Best Seller Product"
          className="object-cover max-h-[400px] w-[80%] "
        />
      </div>
      <div className=" flex  items-center gap-20 justify-between p-4 ">
        <div className="flex  flex-col gap-3">
          <h1 className="text-md font-semibold">
            {product?.title || <Skeleton />}
          </h1>
          <span>Rp. {nf.format(product?.price) || <Skeleton />}</span>
        </div>
        <Link href={`/products/id/${product?._id}`}>
          <button className="px-4 py-2 text-xl bg-[#FE6A16] text-white rounded-lg font-bold">
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductListComponent;
