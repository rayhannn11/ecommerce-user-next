import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  return (
    <div className="h-[26rem] py-4 border-b-[1px]  flex flex-col bg-[#e9e9e9] justify-start pt-10 items-center">
      <div className="flex  items-center gap-4">
        <h1 className=" text-4xl font-bold italic text-[#E83C00]">SNEAKER</h1>
      </div>
      <h2 className="text-center my-10 w-[40%] text-lg">
        Toko sepatu <i>SNEAKER</i> menawarkan sepatu dengan kualitas harga
        terbaik dan ramah dikantong. <i>SNEAKER</i> menyediakan sepatu sneakers
        dari berbagai brand pilihan seperti vans, converse, nike dan adiddas.
        Kami beroperasional setiap hari mulai dari pukul 10:00 AM – 22:00 PM.{" "}
      </h2>
      <h4 className="text-sm">
        Copyright © 2023 Rayhan Naufal. All Rights Reserved
      </h4>
      <div className="flex my-6 gap-4 text-3xl">
        <Link href="https://github.com/rayhannn11" target="_blank">
          <BsGithub />
        </Link>
        <Link
          href="https://www.instagram.com/rayhan_arrafi/?next=%2F"
          target="_blank"
        >
          {" "}
          <BsInstagram />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rayhan-naufal-arrafi-b02175229/"
          target="_blank"
        >
          <BsLinkedin />
        </Link>

        <Link
          href="https://www.google.com/maps/@-6.3270835,106.8556856,3a,75y,101.5h,79.93t/data=!3m6!1e1!3m4!1sISxTeCrTZ2PQnm8KKX6p3g!2e0!7i16384!8i8192?entry=ttu"
          target="_blank"
        >
          <SiGooglemaps />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
