import React from "react";
import Image from "next/image";
import ShipmentForm from "../../components/ShipmentForm";
import getSession from "../../actions/getSession";
import getCartByEmail from "../../actions/getCartByEmail";

const Shipment = async () => {
  const session = await getSession();
  const userEmail = session?.user?.email;

  const cart = await getCartByEmail(userEmail);
  return (
    <div className="flex min-h-screen h-[31.25rem] flex-col justify-center py-9 sm:px-6  pt-16 lg:pt-10 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center items-center gap-4">
          <div className="relative inline-block overflow-hidden h-12 w-12 md:h-11 md:w-11 ">
            <Image fill src="/images/shipment.png" alt="Shipment" />
          </div>
          <h1 className="text-[#E83C00] text-3xl font-bold italic">Shipment</h1>
        </div>
      </div>
      <ShipmentForm cart={cart} userEmail={userEmail} />
    </div>
  );
};

export default Shipment;
