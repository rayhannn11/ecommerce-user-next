"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const router = useRouter();
  const { pathname } = usePathname();
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

  const gotoPageMobile = (type) => {
    if (type === "homepage") {
      router.push(`/`);
      setMenuOpen(false);
    } else if (type === "products") {
      router.push(`/products`);
      setMenuOpen(false);
    } else if (type === "categories") {
      router.push(`/products/categories`);
      setMenuOpen(false);
    } else if (type === "about") {
      router.push(`/about`);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full py-4 border-b-[1px] fixed-navbar bg-white mb-10 z-50">
      <div className="flex justify-end md:justify-between items-center p-3 md:px-8">
        {/* Left - Logo */}
        <Link href={"/"}>
          <div className="hidden md:flex  items-center gap-4 ">
            <div className="relative h-9 w-9 md:h-11 md:w-11 rounded-full overflow-hidden">
              <Image fill src="/images/logo.jpg" alt="Logo" />
            </div>
            <h1 className=" text-[#E83C00] text-2xl md:text-3xl font-bold italic">
              SNEAKER
            </h1>
          </div>
        </Link>

        {/* Right - Desktop Menu */}
        <div className="flex justify-center items-center  gap-6 text-lg">
          {/* Search Input */}
          <div className="relative wrapper-items-navbar border-b-[1px] border-[#111]  hover:text-black">
            <button>
              <FiSearch className="text-2xl text-[#5a5c61]" />
            </button>
            <input
              type="text"
              placeholder="Search Here"
              className={clsx(
                "w-full md:w-[10rem] outline-none transition-all",
                name && "md:w-[14rem]"
              )}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Search Data Product */}
            <div className="flex flex-col absolute top-14 bg-white rounded-md border border-[#222222]">
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
          </div>

          {/* Orders Link */}
          {session?.data?.user && (
            <Link href={`/account/orders/${session?.data?.user?.email}`}>
              <div className="wrapper-items-navbar hover:text-[#FE6A16]">
                <PiBasketBold className="text-2xl" />
                <h1 className="hidden md:inline-block">Orders</h1>
              </div>
            </Link>
          )}

          {/* Cart Link */}
          <Link href={"/cart"}>
            <div className="wrapper-items-navbar hover:text-[#FE6A16]">
              <PiHandbagLight className="text-2xl" />
              <h1 className="hidden md:inline-block">Cart</h1>
            </div>
          </Link>

          {/* Account/Profile */}
          {session?.data?.user ? (
            <div
              className="wrapper-items-navbar relative"
              onClick={() => setDropdown(!dropdown)}
            >
              <div className="relative h-9 w-9 md:h-11 md:w-11 rounded-full overflow-hidden">
                <Image
                  fill
                  src={session?.data?.user?.image || "/images/placeholder.jpg"}
                  alt="Avatar"
                />
              </div>
              <IoMdArrowDropdown className="text-2xl" />
              {dropdown && (
                <div className="absolute top-12 right-0 w-[100px] bg-red-600 px-2 py-1 rounded-md">
                  <button
                    className="text-white font-bold"
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
                <h1 className="hidden md:inline-block">Account</h1>
              </div>
            </Link>
          )}

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-2xl pr-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center border-t-[1px] justify-center pt-4 p-2 ">
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col md:hidden items-start py-4 bg-white border-t-[1px] border-gray-200 z-[100]">
          <div className="menu-item" onClick={() => gotoPageMobile("homepage")}>
            <p className="py-2 text-lg">HOMEPAGE</p>
          </div>
          <div className="menu-item" onClick={() => gotoPageMobile("products")}>
            <p className="py-2 text-lg">PRODUCTS</p>
          </div>
          <div
            className="menu-item"
            onClick={() => gotoPageMobile("categories")}
          >
            <p className="py-2 text-lg">CATEGORIES</p>
          </div>
          <div className="menu-item" onClick={() => gotoPageMobile("about")}>
            <p className="py-2 text-lg">ABOUT</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
