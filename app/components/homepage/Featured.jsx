"use client";

import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  const idProduct = "64ddc696c43928d48ee73dfe";
  return (
    <div className="py-5 px-3 w-full h-auto relative bg-[#222222] gap-10 text-white flex flex-col md:flex-row items-center justify-center">
      <div className="h-full w-full max-w-[70rem] flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-[50%] p-5">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Nike Gamma Force
          </h1>
          <h2 className="text-base md:text-lg mb-4 leading-relaxed">
            Lapisan demi lapisan gaya dimensional—itulah kekuatan yang harus
            diperhitungkan. Menawarkan kenyamanan dan keserbagunaan, tendangan
            ini berakar pada warisan budaya bola basket. Bahan kerah memberi
            penghormatan pada olahraga vintage sementara platform halus
            meningkatkan penampilan Anda, secara harfiah. Gamma Force menempa
            warisannya sendiri: gaya istana yang dapat dikenakan sepanjang hari,
            ke mana pun Anda pergi.
          </h2>
          <Link href={`/products/id/${idProduct}`}>
            <button className="px-6 py-3 text-lg bg-[#FE6A16] text-white rounded-lg font-bold">
              See Product
            </button>
          </Link>
        </div>
        <div className="w-full md:w-[50%] flex justify-center items-center mt-5 md:mt-0">
          <Image
            src="/images/featured-product.png"
            alt="Featured Product"
            width={500}
            height={300}
            className="w-full max-w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
