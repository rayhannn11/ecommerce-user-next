import React from "react";
import { brandLogo } from "../../data";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <div className="flex justify-center py-4 px-0 h-auto my-10">
      <div className="w-[900px] flex flex-col gap-3 ">
        <h1 className="text-center text-2xl font-bold my-3 mt-6">
          Kami Bekerja Sama Dengan
        </h1>
        <div className="flex  items-center justify-center gap-6 ">
          {brandLogo?.map((item) => (
            <div className="w-[300px]   h-auto  " key={item.id}>
              <img
                className="w-[160px] h-[160px] object-scale-down "
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
