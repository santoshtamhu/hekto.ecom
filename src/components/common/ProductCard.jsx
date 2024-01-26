import React from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "./icons/CartIcon";
import { HeartIcon } from "./icons/HeartIcon";
import { MagnifyingGlassIcon } from "./icons/MagnifyingGlassIcon";

export const ProductCard = ({ product }) => {
  return (
    <li className="group relative flex h-[361px] w-[270px] justify-center pr-0 shadow-lg">
      <div>
        <div className="absolute left-2 top-2 hidden gap-2 group-hover:flex">
          <CartIcon />
          <HeartIcon />
          <MagnifyingGlassIcon />
        </div>
        <div className="flex h-[236px] w-[270px] justify-center bg-customGreyBackground group-hover:bg-customGreyHoverBackground">
          <img className="h-full" src={product.image} alt="" />
          <div className="group-hover:flex-center absolute bottom-[138px] left-auto right-auto hidden h-7 w-24 cursor-pointer bg-green-500">
            <Link to={`/products/${product._id}`}>
              <p className="pt-1 font-josefin text-[12px] text-white">
                View Details
              </p>
            </Link>
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
            In Stock: {product.in_stock}
          </p>
          <p className="mt-1 font-lato text-[14px] text-customBlue group-hover:text-white">
            ${product.price}.00
          </p>
        </div>
      </div>
    </li>
  );
};
