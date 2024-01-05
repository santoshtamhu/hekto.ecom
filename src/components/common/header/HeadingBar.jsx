import { IoMailOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const HeadingBar = () => {
  return (
    <div className="bg-[#7E33E0]">
      <div className="container hidden h-11 items-center justify-center font-josefin text-zinc-100 lg:flex lg:gap-8 xl:justify-between xl:px-1">
        <div className="flex gap-10 ">
          <span className="flex items-center gap-3">
            <IoMailOutline />
            mhhasanul@gmail.com
          </span>
          <span className="flex items-center gap-3">
            <TbPhoneCall />
            (12345)67890
          </span>
        </div>
        <div className="flex gap-4">
          <div>
            <label for="languages"></label>
            <select name="languages" className="bg-transparent">
              <option className="bg-violet-600" value="English">
                English
              </option>
              <option className="bg-violet-600" value="Nepali">
                Nepali
              </option>
              <option className="bg-violet-600" value="Hindi">
                Hindi
              </option>
            </select>
          </div>
          <div>
            <label for="currencies"></label>
            <select name="currencies" className="bg-transparent">
              <option className="bg-violet-600" value="USD">
                USD
              </option>
              <option className="bg-violet-600" value="INR">
                INR
              </option>
              <option className="bg-violet-600" value="NPR">
                NPR
              </option>
            </select>
          </div>
          <Link to="/login" className="flex items-center">
            Login
            <RiUserLine />
          </Link>
          <div className="flex items-center gap-1">
            Wishlist
            <FaRegHeart />
          </div>
          <div className="flex items-center gap-1">
            <LuShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingBar;
