import Link from "next/link";
import LoginAuth from "../components/LoginAuth";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex min-h-screen h-[31.25rem] flex-col justify-center  py-9 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center items-center gap-4">
          <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11 ">
            <Image fill src="/images/logo.jpg" alt="Avatar" />
          </div>
          <h1 className="text-[#E83C00] text-3xl font-bold italic">SNEAKER</h1>
        </div>
        <h2
          className="
              mt-6 
              text-center 
              text-3xl 
              font-bold 
              tracking-tight 
              text-gray-900
              "
        >
          Masuk Menggunakan Google
        </h2>
        <h3
          className="
              mt-2 
              text-center 
              text-1xl 
              font-bold 
              tracking-tight 
              text-gray-900
              cursor-pointer
              "
        ></h3>
      </div>
      <LoginAuth />
    </div>
  );
}
