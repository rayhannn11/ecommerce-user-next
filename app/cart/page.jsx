import clsx from "clsx";
import Link from "next/link";

import getSession from "../actions/getSession";
import getCartByEmail from "../actions/getCartByEmail";
import CartItem from "../components/CartItem";
import RightCart from "../components/RightCart";

const cart = async () => {
  var nf = new Intl.NumberFormat();
  const session = await getSession();
  const email = session?.user?.email;
  const cart = await getCartByEmail(session?.user?.email);

  let { total } = cart.reduce(
    (cartTotal, cartItem) => {
      const { price, quantityItem } = cartItem;
      const itemTotal = price * quantityItem;

      cartTotal.total += itemTotal;
      return cartTotal;
    },
    {
      total: 0,
    }
  );

  return (
    <div className="min-h-full w-[90%] flex flex-col lg:flex-row items-start justify-center relative pt-[3rem] md:pt-[6rem] mb-10 mx-auto">
      <div className="flex flex-col lg:flex-row items-start justify-center w-full">
        {/* Left Cart */}
        <div className="flex-[2] w-full lg:w-[60%] flex flex-col mb-6 lg:mb-0 items-center lg:items-start">
          <div className="text-2xl font-medium mb-2.5">
            Keranjang Belanja ({cart.length})
          </div>
          <div className="border w-[40%] lg:w-[26%] mb-6 border-solid border-black"></div>
          {cart.length === 0 ? (
            <>
              <h3 className="text-xl font-[normal]">
                Tidak ada barang di dalam keranjang belanja anda.
              </h3>
              <u className="text-lg font-[bold] mt-3.5 active:text-[#E83C00]">
                <Link href={"/products"}>Belanja Sekarang.</Link>
              </u>
            </>
          ) : (
            <>
              {/* Cart Items Start */}
              {cart.map((item) => (
                <CartItem item={item} key={item?._id} />
              ))}
              {/* Cart Items End */}
            </>
          )}
        </div>
        {/* Right Cart */}
        <div className="flex-[1] w-full lg:w-[40%] h-max max-h-[400px] sticky top-[100px] lg:mr-12">
          <RightCart total={total} email={email} cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default cart;
