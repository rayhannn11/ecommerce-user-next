import React from "react";

const EmptyState = () => {
  return (
    <div
      className="
    px-4
    py10
    sm:px-6
    lg:px-8
    lg:py-6
    h-full
    flex
    justify-center
    items-center
    bg-[#f8f8f8]
    "
    >
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold text-gray-900">
          Pilih pesanan atau buat pesanan baru
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
