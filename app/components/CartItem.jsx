"use client";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const CartItem = ({ item }) => {
  var nf = new Intl.NumberFormat();
  const router = useRouter();
  const handleRemoveItem = (id) => {
    function deleteSucces(res) {
      toast.success("Item Has Been Removed");
      router.refresh();
      console.log(res);
    }
    axios
      .delete("/api/cart/deleteById", {
        data: { id },
      })
      .then((res) => deleteSucces(res))
      .catch((err) => toast.error("Something went wrong"));
  };

  const handleSize = (item, value) => {
    const id = item._id;
    const selectedSize = value;

    axios
      .put("/api/cart/updateSize", {
        id,
        selectedSize,
      })
      .then((res) => router.refresh())
      .catch((err) => toast.error("Something went wrong"));
  };

  const handleQuantityItem = (item, value) => {
    const id = item._id;
    const quantityItem = value;

    axios
      .put("/api/cart/updateQuantity", {
        id,
        quantityItem,
      })
      .then((res) => router.refresh())
      .catch((err) => toast.error("Something went wrong"));
  };

  return (
    <div className="flex justify-between flex-col  h-full w-full mt-4 mb-10 lg:ml-10">
      {/* Cart Item Start */}
      <div className="flex flex-col md:flex-row items-center justify-start h-auto w-full">
        <Image
          src={item?.img}
          alt=""
          width="160"
          height="160"
          className="mr-0 mb-4 md:mr-2.5 md:mb-0"
        />
        <div className="flex flex-col mx-0 md:mx-5">
          <div className="font-bold text-lg cursor-pointer mb-[0.4rem]">
            <Link href={`/products/id/${item?.productId}`}>{item?.title}</Link>
          </div>
          <div className="flex font-[lighter] gap-4 mb-2 md:mb-0">
            {item?.categories?.map((categorie) => (
              <p key={categorie}>
                {categorie
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join("")}{" "}
              </p>
            ))}
            <p>/</p>
            {item?.brand?.map((brand) => (
              <p key={brand}>{brand}</p>
            ))}
          </div>
          {/* Item Option */}
          <div className="flex justify-between mt-2 md:mt-5">
            <div className="flex first:mr-5 mb-2 md:mb-0">
              <p className="text-lg mr-1.5">Size</p>
              <select
                className="text-base text-[#6f6c6c] cursor-pointer pr-2.5 border-[none]"
                value={item?.selectedSize}
                onChange={(e) => handleSize(item, e.target.value)}
              >
                {item?.size?.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </div>
            <div className="flex first:mr-5">
              <p className="text-lg mr-1.5">Quantity</p>
              <select
                className="text-base text-[#6f6c6c] cursor-pointer pr-2.5 border-[none]"
                value={item?.quantityItem}
                onChange={(e) => handleQuantityItem(item, e.target.value)}
              >
                {[...Array(item?.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Item Option End*/}
          <button
            className="bg-[#d71313] text-[white] text-sm w-full md:w-2/5 rounded cursor-pointer mt-[30px] p-2.5 border-[none] active:bg-[#ad2525]"
            onClick={() => handleRemoveItem(item?._id)}
          >
            Remove
          </button>
        </div>
        <div className="font-medium text-lg mt-4 md:mt-0 md:ml-[12.5rem]">
          Rp {nf.format(item?.price * item?.quantityItem)}
        </div>
      </div>
      <div className="border w-full mt-8 border-solid border-[#eae9e9]"></div>
      {/* Cart Item End */}
    </div>
  );
};

export default CartItem;
