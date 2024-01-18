import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const ProductCard = (product) => {
  return (
    <li className="group relative flex h-[361px] w-[270px] justify-center pr-0 shadow-lg">
      <Link to={`/products/${product._id}`}>
        <div>
          <div className="absolute left-2 top-2 hidden gap-2 group-hover:flex">
            <div className="flex-center h-[30px] w-[30px] rounded-full hover:bg-[#EEEFFB]">
              <LuShoppingCart className="text-[#2F1AC4]" />
            </div>
            <div className="flex-center  h-[30px] w-[30px] rounded-full hover:bg-[#EEEFFB]">
              <FaRegHeart className="text-[#2F1AC4]" />
            </div>
            <div className="flex-center  h-[30px] w-[30px] rounded-full hover:bg-[#EEEFFB]">
              <HiMagnifyingGlassPlus className="text-[#2F1AC4]" />
            </div>
          </div>
          <div className="flex h-[236px] w-[270px] justify-center bg-customGreyBackground group-hover:bg-customGreyHoverBackground">
            <img className="h-full" src={product.thumbnail} alt="" />
            <div className="group-hover:flex-center absolute bottom-[138px] left-auto right-auto hidden h-7 w-24 cursor-pointer bg-green-500">
              <p className="pt-1 font-josefin text-[12px] text-white">
                View Details
              </p>
            </div>
          </div>
          <div className="flex h-[125px] flex-col items-center group-hover:bg-customBlueHoverBackground">
            <p className="pt-3 font-lato text-lg font-bold text-customPink group-hover:text-white">
              {product.name}
            </p>
            <div className="mt-2 flex h-1 w-12 gap-1 ">
              <div className="h-1 w-3.5 rounded-lg bg-teal-400"></div>
              <div className="h-1 w-3.5 rounded-lg bg-customPink"></div>
              <div className="h-1 w-3.5 rounded-lg bg-customBlue group-hover:bg-orange-200"></div>
            </div>
            <p className="mt-2 font-josefin text-[14px] text-customBlue group-hover:text-white">
              Code: {product.code}
            </p>
            <p className="mt-1 font-lato text-[14px] text-customBlue group-hover:text-white">
              ${product.price}.00
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};
