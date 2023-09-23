"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar bg-white py-3 md:px-20">
      <div className="navbar-start">
        <a className="btn btn-ghost hover:bg-transparent hover:opacity-100 normal-case text-lg text-orange-500">
          <Image src="/images/logo.png" width={40} height={40} alt="logo" />
          Laxmi Metal Craft
        </a>
      </div>
      <div className="navbar-end">
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li className="hover:bg-transparent hover:opacity-100" >
              <Link href="/" >Home</Link>
            </li>
            <li>
            <Link href="/product" >Product</Link>
            </li>
            <li>
            <Link href="/about-us" >About Us</Link>
            </li>
            <li>
            <Link href="/contact-us" >Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div
          style={{
            backgroundColor: "rgba(217, 217, 217, 0.59)",
          }}
          className="modal"
        >
          <div className="w-[225px] absolute top-0 right-0  pl-[21px] pr-5 py-5 bg-white rounded-bl-[5px] flex-col justify-between items-start inline-flex">
            <div className="self-stretch h-[226px] px-px flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch h-[572px] flex-col justify-start items-start gap-3 flex">
                <Link
                  onClick={() => document.getElementById("my_modal_7").click()}
                  className="self-stretch h-11  rounded flex-col justify-center items-center flex"
                  href="/"
                >
                  <div
                    className={`self-stretch p-3 bg-opacity-30 rounded justify-center items-center gap-4 inline-flex hover:bg-orange ${
                      pathname === "/" ? "bg-orange-500" : null
                    }`}
                  >
                    <Image
                      src="/images/home.png"
                      width={15}
                      height={15}
                      alt="logo"
                    />
                    <div className="grow shrink basis-0 text-orange-500 text-sm font-medium leading-tight">
                      Home
                    </div>
                  </div>
                </Link>
                <Link
                  onClick={() => document.getElementById("my_modal_7").click()}
                  className="self-stretch h-11  rounded flex-col justify-center items-center flex"
                  href="/products"
                >
                  <div
                    className={`self-stretch p-3 bg-opacity-30 rounded justify-center items-center gap-4 inline-flex hover:bg-orange ${
                      pathname === "/products" ? "bg-orange-500" : null
                    }`}
                  >
                    <Image
                      src="/images/products.png"
                      width={15}
                      height={15}
                      alt="logo"
                    />
                    <div className="grow shrink basis-0 text-orange-500 text-sm font-medium leading-tight">
                      Products
                    </div>
                  </div>
                </Link>
                <Link
                  onClick={() => document.getElementById("my_modal_7").click()}
                  className="self-stretch h-11  rounded flex-col justify-center items-center flex"
                  href="/about-us"
                >
                  <div
                    className={`self-stretch p-3 bg-opacity-30 rounded justify-center items-center gap-4 inline-flex hover:bg-orange ${
                      pathname === "/about-us" ? "bg-orange-500" : null
                    }`}
                  >
                    <Image
                      src="/images/about-us.png"
                      width={15}
                      height={15}
                      alt="logo"
                    />
                    <div className="grow shrink basis-0 text-orange-500 text-sm font-medium leading-tight">
                      About Us
                    </div>
                  </div>
                </Link>
                <Link
                  onClick={() => document.getElementById("my_modal_7").click()}
                  className="self-stretch h-11  rounded flex-col justify-center items-center flex"
                  href="/contact-us"
                >
                  <div
                    className={`self-stretch p-3 bg-opacity-30 rounded justify-center items-center gap-4 inline-flex hover:bg-orange ${
                      pathname === "/contact-us" ? "bg-orange-500" : null
                    }`}
                  >
                    <Image
                      src="/images/contact-us.png"
                      width={15}
                      height={15}
                      alt="logo"
                    />
                    <div className="grow shrink basis-0 text-orange-500 text-sm font-medium leading-tight">
                      Contact Us
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
        <label htmlFor="my_modal_7" className="btn btn-ghost lg:hidden">
          <Image
            src="/images/hamburger.png"
            width={33}
            height={33}
            alt="logo"
          />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
