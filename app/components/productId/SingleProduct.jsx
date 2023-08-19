"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

const SingleProduct = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantityItem, setQuantityItem] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.img.at(0));
  var nf = new Intl.NumberFormat();

  return (
    <div
      className="h-full w-[70rem]  flex  justify-center items-center"
      key={product?._id}
    >
      {/* image component */}
      <div className="w-[60%] flex pb-28 mr-10 items-start justify-start">
        <div className="flex flex-col gap-3 mr-6">
          {product?.img?.map((img) => (
            <div
              className="relative border border-[#000] h-16 w-16 cursor-pointer"
              onMouseOver={() => setActiveImage(img)}
            >
              <Image
                src={img}
                alt="Product Image"
                fill
                className={clsx(img === activeImage && "bg-[#efefef]")}
              />
            </div>
          ))}
        </div>
        <Image
          src={activeImage || <Skeleton />}
          alt="Product Image"
          width="600"
          height="400"
          className="bg-[#F6F6F6]"
        />
      </div>
      {/* Product component */}
      <div className="flex pt-7 flex-col w-[40%]">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold mb-3">{product?.title}</h1>
          {!isNaN(product?.totalStars / product?.countReviewers) && (
            <div className="flex items-center gap-1">
              {Array(Math.round(product?.totalStars / product?.countReviewers))
                .fill()
                .map((item, i) => (
                  <img
                    src="/images/star.png"
                    alt=""
                    key={i}
                    className="h-4 w-4"
                  />
                ))}
              <span>
                ({Math.round(product.totalStars / product.countReviewers)})
              </span>
            </div>
          )}
        </div>
        <div className="flex gap-3 mb-6 text-md font-semibold">
          <div className="flex gap-3 ">
            {product?.categories.map((categorie) => (
              <Link href={`/products/categories/${categorie}`}>
                <h1 key={categorie}>
                  {categorie
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join("")}
                </h1>
              </Link>
            ))}
          </div>
          <h4>/</h4>
          <div>
            <h1>{product?.brand.at(0)}</h1>
          </div>
        </div>
        <p className="text-lg">{product?.desc}</p>
        <p className="text-xl my-4 font-semibold">
          Rp. {nf.format(product?.price)}
        </p>
        {/* Size */}
        <h3 className="text-xl mt-4">Select Size</h3>
        <div className=" flex items-center justify-start flex-wrap my-5">
          {product?.size.slice(0, product.size.length - 1).map((size) => (
            <select
              className={clsx(
                "appearance-none text-lg  h-12 w-[120px] border border-[#000] rounded-[6px] m-1 cursor-pointer overflow-hidden text-center ",
                size === selectedSize && "text-white bg-[#000] "
              )}
              key={size}
              onClick={(e) => setSelectedSize(e.target.value)}
            >
              <option className="hidden">{size}</option>
            </select>
          ))}
        </div>
        {/* Quantity */}
        <div className="flex items-center m-3 mb-5">
          <h3 className="text-xl ">Select Quantity :</h3>
          <select
            value={quantityItem}
            onChange={(e) => setQuantityItem(e.target.value)}
            className="p-3 pr-5 text-lg ml-5 border border-[#000] "
          >
            {[...Array(product?.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </div>

        <button className="my-10 px-8 py-4 text-xl bg-[#FE6A16] text-white rounded-lg font-bold active:bg-[#e2651d] ">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
