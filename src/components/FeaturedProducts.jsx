import { FaHeart, FaRegHeart } from "react-icons/fa";

import { LuShoppingCart } from "react-icons/lu";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
let chairs = [
  {
    thumbnail: "./assets/images/chairs/image1.svg",
    name: "Cantilever chair",
    code: "Y523201",
    price: 42.0,
  },
  {
    thumbnail: "./assets/images/chairs/image2.svg",
    name: "Boratly chair",
    code: "GT23201",
    price: 48.0,
  },
  {
    thumbnail: "./assets/images/chairs/image3.svg",
    name: "Macoratt chair",
    code: "S223201",
    price: 50.0,
  },
  {
    thumbnail: "./assets/images/chairs/image4.svg",
    name: "Sollam chair",
    code: "ZY3201",
    price: 39.0,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="mt-20 grid justify-center gap-4 xl:container md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <ul>
        {chairs.map((el) => {
          return (
            <li>
              <div className="group relative mb-16 h-[361px] w-[270px] shadow-lg">
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
                <div className="bg-customGreyBackground group-hover:bg-customGreyHoverBackground flex h-[236px] w-[270px] justify-center">
                  <img className="h-full" src={el.thumbnail} alt="" />
                  <div className="group-hover:flex-center absolute bottom-[138px] left-auto right-auto hidden h-7 w-24 cursor-pointer bg-green-500">
                    <p className="pt-1 font-josefin text-[12px] text-white">
                      View Details
                    </p>
                  </div>
                </div>
                <div className="group-hover:bg-customBlueHoverBackground flex h-[125px] flex-col items-center">
                  <p className="pt-3 font-lato text-lg font-bold text-customPink group-hover:text-white">
                    {el.name}
                  </p>
                  <div className="mt-2 flex h-1 w-12 gap-1 ">
                    <div className="h-1 w-3.5 rounded-lg bg-teal-400"></div>
                    <div className="h-1 w-3.5 rounded-lg bg-customPink"></div>
                    <div className="h-1 w-3.5 rounded-lg bg-customBlue group-hover:bg-orange-200"></div>
                  </div>
                  <p className="mt-2 font-josefin text-[14px] text-customBlue group-hover:text-white">
                    Code: {el.code}
                  </p>
                  <p className="mt-1 font-lato text-[14px] text-customBlue group-hover:text-white">
                    ${el.price}.00
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
  return (
    <div className="container mt-10 flex justify-center gap-10">
      {chairs.map((el) => {
        return (
          <div className="relative h-96 w-64">
            <div className="absolute left-0 top-0 h-96 w-64 bg-white shadow" />
            <div className="absolute left-0 top-0 h-60 w-64 bg-slate-50" />
            <div className="absolute left-[71px] top-[251px] font-['Lato'] text-lg font-bold text-customPink">
              {el.name}
            </div>
            <div className="absolute left-[110px] top-[285px] h-1 w-12">
              <div className="absolute left-0 top-0 h-1 w-3.5 rounded-lg bg-teal-400" />
              <div className="absolute left-[19px] top-0 h-1 w-3.5 rounded-lg bg-pink-500" />
              <div className="absolute left-[38px] top-0 h-1 w-3.5 rounded-lg bg-blue-900" />
            </div>
            <div className="font-['Josefin Sans'] absolute left-[92px] top-[301px] text-sm font-normal text-violet-950">
              Code - {el.code}
            </div>
            <div className="absolute left-[115px] top-[327px] font-['Lato'] text-sm font-normal text-violet-950">
              ${el.price}.00
            </div>
            <img
              className="absolute left-[40px] top-[46px] h-44 w-44"
              src={el.thumbnail}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProducts;
