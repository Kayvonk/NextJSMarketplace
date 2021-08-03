import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/Kshopv2.png"
            className="cursor-pointer"
            width={150}
            height={60}
            objectFit="contain"
            alt="KshopLogo"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full 2-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Kay</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p className="font-extrabold md:text-sm"> Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-7 bg-yellow-400 text-center rounded-full px-1 text-black font-bold">
              0
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Cart
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Video</p>
        <p className="link">Business</p>
        <p className="link ">Today's Deals</p>
        <p className="link hidden md:inline-flex">Electronics</p>
        <p className="link hidden md:inline-flex">Food & Grocery</p>
        <p className="link hidden md:inline-flex">Premium</p>
        <p className="link hidden md:inline-flex">Buy Again</p>
        <p className="link hidden md:inline-flex">Shopper Toolkit</p>
        <p className="link hidden md:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
