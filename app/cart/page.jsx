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

  // const product = cart.map((item) => item.products);
  const cartItem = cart.map((item) => ({
    ...item.products,
    _id: item._id, // Add the _id field to the products object
  }));

  console.log(cartItem);

  let { total } = cartItem.reduce(
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
    <div className="min-h-full w-[90%] flex items-start justify-center relative pt-[11rem] mt-5 mb-10 ">
      <div className="flex items-start justify-center w-[90%]">
        {/* Left Cart */}
        <div className="flex-[2] flex flex-col">
          <div className="text-2xl font-medium mb-2.5">
            Keranjang Belanja ({cartItem.length})
          </div>
          <div className="border w-[26%] mb-6 border-solid border-black"></div>
          {cartItem.length === 0 ? (
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
              {cartItem.map((item) => (
                <CartItem item={item} key={item?._id} />
              ))}
              {/* Cart Items End */}
            </>
          )}
        </div>
        {/* Right Cart */}
        <div className="flex-[1] h-max max-h-[400px] sticky top-[100px]">
          <RightCart total={total} email={email} cartItem={cartItem} />
        </div>
      </div>
    </div>
  );
};

export default cart;
