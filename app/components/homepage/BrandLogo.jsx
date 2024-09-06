import React from "react";
import { brandLogo } from "../../data";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <div className="flex justify-center items-center py-4 px-0 h-auto my-10">
      <div className="w-[900px] flex flex-col  gap-3 ">
        <h1 className="text-center text-2xl font-bold my-3 mt-6">
          Kami Bekerja Sama Dengan
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 ">
          {brandLogo?.map((item) => (
            <div key={item.id}>
              <img
                className="w-[120px] md:w-[160px] h-[120px] md:h-[160px] object-contain "
                alt="brand-logo"
                src={item.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
