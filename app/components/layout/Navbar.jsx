"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { VscAccount } from "react-icons/vsc";
import { PiHandbagLight, PiBasketBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import clsx from "clsx";
import axios from "axios";

const Navbar = () => {
  // State for search products
  const [name, setName] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const router = useRouter();

  const session = useSession();

  useEffect(() => {
    if (name) {
      axios
        .get("/api/products/filters", {
          params: {
            search: name,
          },
        })
        .then((res) => setSearchData(res.data));
    }
    if (!name) {
      setSearchData("");
    }
    return;
  }, [name]);

  const toProduct = useCallback(
    (id) => {
      router.push(`/products/id/${id}`);
      setName("");
      setSearchData([]);
    },
    [router]
  );

  return (
    <div className="h-25 w-full py-4 border-b-[1px] fixed-navbar flex flex-col bg-white mb-10">
      <div className=" flex justify-between items-center p-3">
        {/* Left */}
        <div className="flex pl-4 items-center gap-4">
          <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11 ">
            <Image fill src="/images/logo.jpg" alt="Avatar" />
          </div>
          <h1 className="text-[#E83C00] text-3xl font-bold italic">SNEAKER</h1>
        </div>
        {/* Right */}
        <div className="flex items-center gap-6 pr-6 text-lg">
          <div className="relative wrapper-items-navbar border-b-[1px] border-[#111] pb-1 hover:text-black">
            <button>
              <FiSearch className="text-2xl text-[#5a5c61]" />
            </button>
            <input
              type="text"
              placeholder="Search Here"
              className={clsx(
                "w-[10rem] outline-none transition-all",
                name && "w-[16rem] "
              )}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col absolute top-20 bg-white rounded-md border border-[#222222]">
            {!!searchData &&
              searchData.length >= 0 &&
              searchData?.map((data) => (
                <div className="p-2 px-10">
                  <h1
                    className="cursor-pointer"
                    onClick={() => toProduct(data._id)}
                  >
                    {data.title}
                  </h1>
                </div>
              ))}
          </div>

          {session?.data?.user && (
            <Link href={`/account/orders/${session?.data?.user?.email}`}>
              <div className="wrapper-items-navbar hover:text-[#FE6A16]">
                <PiBasketBold className="text-2xl" />
                <h1>Orders</h1>
              </div>
            </Link>
          )}
          <Link href={"/cart"}>
            <div className="wrapper-items-navbar hover:text-[#FE6A16]">
              <PiHandbagLight className="text-2xl" />
              <h1>Cart</h1>
            </div>
          </Link>
          {session?.data?.user ? (
            <div
              className="wrapper-items-navbar relative"
              onClick={() => setDropdown(!dropdown)}
            >
              <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11 ">
                <Image
                  fill
                  src={session?.data?.user?.image || "/images/placeholder.jpg"}
                  alt="Avatar"
                />
              </div>
              <IoMdArrowDropdown className="text-2xl" />
              {dropdown && (
                <div className="h-auto w-[100px] bg-red-600 top-[64px] px-2 py-1 rounded-md right-1 absolute ">
                  <button
                    className="text-center text-white font-bold"
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href={"/login"}>
              <div className="wrapper-items-navbar hover:text-[#FE6A16]">
                <VscAccount className="text-2xl" />
                <h1>Account</h1>
              </div>
            </Link>
          )}
        </div>
      </div>
      {/* Menu Navigation */}
      <div className="flex items-center border-t-[1px] justify-center pt-4 p-2 ">
        <ul className=" list-none font-semibold text-[1rem] flex items-center gap-10">
          <Link href="/">
            <li>HOMEPAGE</li>
          </Link>
          <Link href="/products">
            <li>PRODUCTS</li>
          </Link>
          <Link href="/products/categories">
            <li>CATEGORIES</li>
          </Link>
          <Link href="/about">
            <li>ABOUT</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
