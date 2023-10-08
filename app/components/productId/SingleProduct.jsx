"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const SingleProduct = ({ product }) => {
  const session = useSession();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantityItem, setQuantityItem] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.img.at(0));
  var nf = new Intl.NumberFormat();
  const email = session?.data?.user?.email;

  const addToCart = () => {
    if (selectedSize !== 0 && email) {
      function successCart() {
        toast.success("Product Add to Cart");
        router.push("/cart");
      }

      const data = {
        userEmail: email,
        productId: product?._id,
        title: product?.title,
        img: product?.img.at(0),
        categories: product?.categories,
        size: product?.size,
        price: product?.price,
        brand: product?.brand.at(0),
        countInStock: product?.countInStock,
        quantityItem: quantityItem,
        selectedSize: selectedSize,
      };
      console.log(data);
      axios.post("/api/cart/add", data).then(() => successCart());
    } else {
      toast.error("Tolong Pilih Ukuran Sepatu !");
    }
  };

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
              key={img}
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
        {session.status === "unauthenticated" ? (
          <button
            onClick={() => router.push("/login")}
            className="my-10 px-8 py-4 text-xl bg-[#007BFF] text-white rounded-lg font-bold active:bg-[#085cb6] "
          >
            Login
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="my-10 px-8 py-4 text-xl bg-[#FE6A16] text-white rounded-lg font-bold active:bg-[#e2651d] "
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
