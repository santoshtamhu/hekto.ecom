import { Link } from "react-router-dom";
import { CartIcon } from "../../components/common/icons/CartIcon";
import { HeartIcon } from "../../components/common/icons/HeartIcon";
import { MagnifyingGlassIcon } from "../../components/common/icons/MagnifyingGlassIcon";

export const ListView = ({ product }) => {
  return (
    <>
      <div className="container mt-28">
        {product.map((e) => {
          return (
            <div className="relative mb-7 h-[230px] w-[921px] font-josefin">
              <div className="absolute -right-20 top-8 mt-1 flex h-1 w-full justify-center gap-2 ">
                <div className="h-[10px] w-[10px] rounded-lg bg-teal-400"></div>
                <div className="h-[10px] w-[10px] rounded-lg bg-customPink"></div>
                <div className="h-[10px] w-[10px] rounded-lg bg-customBlue"></div>
              </div>
              <div className="flex items-center gap-[29px] p-[18px]">
                <div className="h-48 w-72">
                  <img
                    className="h-full w-full"
                    src={e.image}
                    alt="product image"
                  />
                </div>
                <div>
                  <Link to={`/products/${e._id}`}>
                    <span className="flex items-center gap-[67px] text-[18px] font-bold text-[#151875]">
                      {e.name}
                    </span>
                  </Link>

                  <div className="mt-2 flex gap-2">
                    <span className="text-[#151875]">${e.price}</span>
                    <span className="text-customPink line-through">$43.00</span>
                  </div>
                  <div class="w-96 font-lato text-base font-normal leading-7 text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </div>
                  <div className="group-hover mt-6 flex gap-[31px]">
                    <CartIcon />
                    <HeartIcon />
                    <MagnifyingGlassIcon />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
