"use client";

import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  const idProduct = "64ddc696c43928d48ee73dfe";
  return (
    <div className="py-5 px-3 w-full h-auto  relative bg-[#222222] gap-10 text-white flex items-center justify-center">
      <div className="h-full w-[70rem] flex  justify-center items-center ">
        <div className="w-[50%]">
          <h1 className="text-3xl font-bold mb-6">Nike Gamma Force</h1>
          <h2 className="text-lg mb-6">
            Lapisan demi lapisan gaya dimensional—itulah kekuatan yang harus
            diperhitungkan. Menawarkan kenyamanan dan keserbagunaan, tendangan
            ini berakar pada warisan budaya bola basket. Bahan kerah memberi
            penghormatan pada olahraga vintage sementara platform halus
            meningkatkan penampilan Anda, secara harfiah. Gamma Force menempa
            warisannya sendiri: gaya istana yang dapat dikenakan sepanjang hari,
            ke mana pun Anda pergi
          </h2>

          <Link href={`/products/id/${idProduct}`}>
            <button className="px-8 py-4 text-xl bg-[#FE6A16] text-white rounded-lg font-bold">
              See Product
            </button>
          </Link>
        </div>
        <Image
          src="/images/featured-product.png"
          alt=""
          width="500"
          height="300"
        />
      </div>
    </div>
  );
};

export default Featured;
