import React from "react";
import { categoriesData } from "../../data";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const categories = () => {
  return (
    <div className="h-auto p-[40px] my-10 flex items-center justify-center flex-col w-full min-h-full pt-36">
      <div className="h-full w-[90rem] flex flex-col justify-center items-center gap-6">
        {categoriesData.map((categorie) => (
          <div className="relative" key={categorie.id}>
            <Image
              src={categorie.img}
              width="900"
              height="300"
              className="bg-opacity-50"
            />
            <div className="w-full h-full bg-[#fdfdfd37] absolute top-0 flex justify-start items-end">
              <div className="ml-10 mb-10 flex flex-col items-start">
                <div
                  className={clsx(
                    "mb-4 text-3xl font-bold ",
                    categorie.colorWanita && "text-white",
                    categorie.colorAnak && "text-[#ff47a0]"
                  )}
                >
                  {categorie.title}
                </div>
                <Link
                  href={`/products/categories/${categorie.categories}`}
                  className="py-2 px-4 bg-[#111] font-semibold text-md text-white rounded-full"
                >
                  <h1>Shop</h1>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default categories;
