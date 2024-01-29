import { IoMailOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../app/slice/userSlice";
import ProtectedComponent from "../ProtectedComponent";

const TopNavBar = () => {
  const user = useSelector((store) => store.user.value);
  const cart = useSelector((store) => store.cart.value);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className=" bg-[#7E33E0]">
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
          {user ? (
            <>
              <span>{user.name}</span>
              <span onClick={handleLogout} className="flex items-center">
                Logout
                <RiUserLine />
              </span>
            </>
          ) : (
            <span>
              <Link to="/login" className="flex items-center">
                Login
                <RiUserLine />
              </Link>
            </span>
          )}

          <ProtectedComponent role="buyer">
            <div className="flex items-center gap-1">
              Wishlist
              <FaRegHeart />
            </div>
          </ProtectedComponent>
          <ProtectedComponent role="buyer">
            <Link to="/cart">
              <div className="relative flex items-center gap-1">
                <div className="flex-center absolute -right-4 -top-1 h-[16px] w-[20px] rounded-full bg-customPink">
                  <span className="font-mono text-[11px] font-bold text-white">
                    {cart}
                  </span>
                </div>

                <LuShoppingCart />
              </div>
            </Link>
          </ProtectedComponent>
          <ProtectedComponent role="seller">
            <Link to="products/add">Add Products</Link>
          </ProtectedComponent>
          <ProtectedComponent role="seller">
            <Link to="products/my-products">My Products</Link>
          </ProtectedComponent>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
