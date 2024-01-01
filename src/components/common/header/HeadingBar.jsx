import { IoMailOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const HeadingBar = () => {
  return (
    <div className="flex h-11 w-full items-center justify-center gap-[445px] bg-[#7E33E0] font-josefin text-zinc-100">
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
      <div className="flex gap-10">
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
        <div className="flex items-center">
          Login
          <RiUserLine />
        </div>
        <div className="flex items-center gap-1">
          Wishlist
          <FaRegHeart />
        </div>
      </div>
    </div>
  );
};

export default HeadingBar;
