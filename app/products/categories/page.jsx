import React from "react";
import { categoriesData } from "../../data";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const categories = () => {
  return (
    <div className="h-auto p-5 md:p-10 my-10 flex items-center justify-center flex-col w-full min-h-full">
      <div className="w-full max-w-[60rem] flex flex-col justify-center items-center gap-6">
        {categoriesData.map((categorie) => (
          <div className="relative w-full" key={categorie.id}>
            <Image
              src={categorie.img}
              width={900}
              height={300}
              className="bg-opacity-50 w-full h-auto object-cover"
              alt={`Category ${categorie.title}`}
            />
            <div className="absolute top-0 w-full h-full bg-[#fdfdfd37] flex justify-start items-end">
              <div className="ml-4 md:ml-10 mb-4 md:mb-10 flex flex-col items-start">
                <div
                  className={clsx(
                    "mb-2 md:mb-4 text-2xl md:text-3xl font-bold",
                    categorie.colorWanita && "text-white",
                    categorie.colorAnak && "text-[#ff47a0]"
                  )}
                >
                  {categorie.title}
                </div>
                <Link
                  href={`/products/categories/${categorie.categories}`}
                  className="py-2 px-4 bg-[#111] font-semibold text-sm md:text-md text-white rounded-full"
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
