import React from "react";

const EmptyState = () => {
  return (
    <div className="hidden  w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-6 h-full lg:flex justify-center items-center  bg-[#f8f8f8]  md:py-20 ">
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold text-gray-900">
          Pilih pesanan atau buat pesanan baru
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
