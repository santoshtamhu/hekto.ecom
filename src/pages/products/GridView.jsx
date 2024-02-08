import { CartIcon } from "../../components/common/icons/CartIcon";
import { HeartIcon } from "../../components/common/icons/HeartIcon";
import { MagnifyingGlassIcon } from "../../components/common/icons/MagnifyingGlassIcon";

export const GridView = ({ product }) => {
  return (
    <>
      <div className="container">
        <div className=" mt-20 grid grid-cols-4 gap-x-12 gap-y-20">
          {product.map((el) => {
            return (
              <div className="relative h-[363px] text-center font-josefin">
                <div className="group-hover absolute mt-6 flex-col gap-[31px]">
                  <CartIcon />
                  <HeartIcon />
                  <MagnifyingGlassIcon />
                </div>
                <div className=" mb-4 h-[280px] bg-[#F6F7FB]">
                  <img
                    className="h-full w-full"
                    src={el.image}
                    alt="product image"
                  />
                </div>
                <span className="font-bold text-[#151875]">{el.name}</span>
                <div className="mt-1 flex h-1 w-full justify-center gap-2 ">
                  <div className="h-[10px] w-[10px] rounded-lg bg-teal-400"></div>
                  <div className="h-[10px] w-[10px] rounded-lg bg-customPink"></div>
                  <div className="h-[10px] w-[10px] rounded-lg bg-customBlue"></div>
                </div>
                <div className="mt-2 flex justify-center gap-2">
                  <span className="text-[#151875]">${el.price}</span>
                  <span className="text-customPink line-through">$43.00</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

/* 
  <div className="relative h-[363px] w-[270px]">
              <div className="absolute left-0 top-0 h-[363px] w-[270px]">
                <div className="absolute left-0 top-0 h-[363px] w-[270px]">
                  <div className="absolute left-0 top-0 h-[280px] w-[270px] bg-slate-50" />
                  <div className="font-['Josefin Sans'] absolute left-[66px] top-[298px] text-center text-lg font-bold text-violet-950">
                    {product.name}
                  </div>
                  <div className="absolute left-[114px] top-[324px] h-2.5 w-[42px]">
                    <div className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-orange-400" />
                    <div className="absolute left-[16px] top-0 h-2.5 w-2.5 rounded-full bg-pink-500" />
                    <div className="absolute left-[32px] top-0 h-2.5 w-2.5 rounded-full bg-violet-500" />
                  </div>
                  <div className="absolute left-[87px] top-[349px] h-3.5 w-24">
                    <div className="font-['Josefin Sans'] absolute left-[53px] top-0 text-center text-sm font-normal text-pink-500 line-through">
                      $42.00
                    </div>
                    <div className="font-['Josefin Sans'] absolute left-0 top-0 text-center text-sm font-normal text-violet-950">
                      {product.price}
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="absolute left-[28px] top-[50px] h-[201px] w-[201px]"
                src={product.image}
              />
            </div>
*/
