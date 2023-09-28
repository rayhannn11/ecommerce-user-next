import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const cart = () => {
  var nf = new Intl.NumberFormat();

  const quantityScreen = 1;
  const quantity = 1;

  const productsScreen = [
    {
      _id: "13423fdfdfdf",
      idProduct: 5634634534,
      img: "https://i.ibb.co/Wvs2JQ7/a7dqpxrvkeq5nsbrvzuq.png",
      title: "Nike Air Jordan",
      categories: ["wanita", "pria"],
      size: ["39", "40"],
      quantityItem: 3,
      selectedSize: 38,
      price: 399000,
      countInStock: 7,
    },
    {
      _id: "13423fdfdfdf",
      idProduct: 5634634534,
      img: "https://i.ibb.co/Wvs2JQ7/a7dqpxrvkeq5nsbrvzuq.png",
      title: "Nike Air Jordan 2",
      categories: ["wanita", "pria"],
      size: ["39", "40"],
      quantityItem: 3,
      selectedSize: 38,
      price: 399000,
      countInStock: 7,
    },
    {
      _id: "13423fdfdfdf",
      idProduct: 5634634534,
      img: "https://i.ibb.co/Wvs2JQ7/a7dqpxrvkeq5nsbrvzuq.png",
      title: "Nike Air Jordan 3",
      categories: ["wanita", "pria"],
      size: ["39", "40"],
      quantityItem: 3,
      selectedSize: 38,
      price: 399000,
      countInStock: 7,
    },
    {
      _id: "13423fdfdfdf",
      idProduct: 5634634534,
      img: "https://i.ibb.co/Wvs2JQ7/a7dqpxrvkeq5nsbrvzuq.png",
      title: "Nike Air Jordan",
      categories: ["wanita", "pria"],
      size: ["39", "40"],
      quantityItem: 3,
      selectedSize: 38,
      price: 399000,
      countInStock: 7,
    },
  ];

  return (
    <div className="min-h-full w-[90%] flex items-start justify-center relative pt-[11rem] mt-5 mb-10 ">
      <div className="flex items-start justify-center w-[90%]">
        {/* Left Cart */}
        <div className="flex-[2] flex flex-col">
          <div className="text-2xl font-medium mb-2.5">
            Keranjang Belanja (1)
          </div>
          <div className="border w-[26%] mb-6 border-solid border-black"></div>
          {quantity === 0 ? (
            <>
              <h3 className="text-xl font-[normal]">
                Tidak ada barang didalam keranjang belanja anda.
              </h3>

              <u className="text-lg font-[bold] mt-3.5 active:text-[#E83C00]">
                <Link href={"/products"}>Belanja Sekarang. </Link>
              </u>
            </>
          ) : (
            <>
              {/* Cart Items Start */}
              {productsScreen.map((item) => (
                <div
                  className="flex items-start justify-start flex-col h-full w-full"
                  key={item?.idProduct}
                >
                  {/* Cart Item Start */}
                  <div className="flex items-start justify-start h-auto w-full">
                    <Image
                      src={item?.img}
                      alt=""
                      width="160"
                      height="160"
                      className="mr-2.5;"
                    />
                    <div className="flex flex-col mx-5 my-0">
                      <div className="font-bold text-lg cursor-pointer mb-[0.4rem]">
                        <Link href={`/product/${item?._id}`}>
                          {item?.title}
                        </Link>
                      </div>
                      <div className="font-[lighter] flex gap-4">
                        {item?.categories?.map((categorie) => (
                          <p key={categorie}>
                            {categorie
                              .split(" ")
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join("")}{" "}
                          </p>
                        ))}
                      </div>
                      {/* Item Option */}
                      <div className="flex justify-between mt-5">
                        <div className="flex first:mr-5">
                          <p className="text-lg mr-1.5">Size</p>
                          <select
                            className=" text-base text-[#6f6c6c] cursor-pointer pr-2.5 border-[none]"
                            value={item?.selectedSize}
                            // onChange={(e) =>
                            //   dispatch(
                            //     updateCartQty({
                            //       ...item,
                            //       selectedSize: Number(e.target.value),
                            //     })
                            //   )
                            // }
                          >
                            {item?.size?.map((size) => (
                              <option key={size}>{size}</option>
                            ))}
                          </select>
                        </div>
                        <div className="flex first:mr-5">
                          <p className="text-lg mr-1.5">Quantity</p>
                          <select
                            className=" text-base text-[#6f6c6c] cursor-pointer pr-2.5 border-[none]"
                            value={item?.quantityItem}
                            // onChange={(e) =>
                            //   dispatch(
                            //     updateCartQty({
                            //       ...item,
                            //       quantityItem: Number(e.target.value),
                            //     })
                            //   )
                            // }
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
                        className="bg-[#d71313] text-[white] text-sm w-2/5 rounded cursor-pointer mt-[30px] p-2.5 border-[none] active:bg-[#ad2525]"
                        // onClick={() => handleRemoveCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="font-medium text-lg ml-[12.5rem]">
                      Rp {nf.format(item?.price * item?.quantityItem)}
                    </div>
                  </div>
                  <div className="border w-full mx-0 my-5 border-solid border-[#eae9e9]"></div>
                  {/* Cart Item End */}
                </div>
              ))}
              {/* Cart Items End */}
            </>
          )}
        </div>
        {/* Right Cart */}
        <div className="flex-[1] h-max max-h-[400px] sticky top-[100px]">
          <div className=" w-full max-h-[400px] flex flex-col justify-end text-black ml-[50px] ">
            <h2 className="font-medium text-xl mb-5">TOTAL BELANJA</h2>
            <div className="flex justify-between">
              <p className=" text-lg mb-2.5">Subtotal:</p>
              {quantityScreen === 0
                ? " Rp. 0.00"
                : ` Rp. ${nf.format(1350000)}`}
            </div>
            <div className="flex justify-between">
              <p className=" text-lg mb-2.5">Estimasi Biaya Pengiriman:</p>
              {quantityScreen === 0 ? " Rp. 0.00" : `Rp. 25,000`}
            </div>
            <div className="flex justify-between">
              <p className=" text-lg mb-2.5">Total:</p>
              {quantityScreen === 0
                ? " Rp. 0.00"
                : ` Rp. ${nf.format(1350000 + 25000)} `}
            </div>
            <div className="border mx-0 my-2.5 border-solid border-[#cccbcb]"></div>
            {/* Button */}
            {quantity === 0 ? (
              <button
                className={
                  "bg-neutral-100 text-[#9e9b9b] font-[bold] mt-5 p-5 rounded-[30px] border-[none] cursor-default"
                }
              >
                CHECKOUT SEKARANG!
              </button>
            ) : (
              <button
                className={
                  "bg-[#111111] text-[white] font-[bold] cursor-pointer mt-5 p-5 rounded-[30px] border-[none] active:bg-[#030303]"
                }
                // onClick={() => console.log("buy item")}
              >
                CHECKOUT SEKARANG!
              </button>
            )}
            <button
              className={clsx(
                quantity === 0
                  ? "bg-neutral-100 text-[#9e9b9b] font-[bold] mt-5 p-5 rounded-[30px] border-[none] cursor-default"
                  : "border bg-transparent text-[#c91515] text-base cursor-pointer mt-[30px] p-2.5 rounded-[30px] border-solid border-[#c91515] hover:bg-[#c91515] hover:text-[#fff] active:bg-[rgb(142,11,11)] active:text-[#fff]"
              )}
              // onClick={() => console.log("empty cart")}
            >
              BERSIHKAN KERANJANG BELANJA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
