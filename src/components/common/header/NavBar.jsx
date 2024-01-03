import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container flex justify-center">
      <nav className="flex w-full justify-between px-3 md:py-6 lg:px-8 xl:px-0 ">
        <div className="flex items-center md:gap-16">
          <h1 className="pt-2 font-josefin text-4xl font-bold">Hekto</h1>
          <ul
            className={`font-lato text-customBlue md:flex md:gap-8 ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            <li>
              <a className="text-customPink hover:text-customBlue" href="/home">
                Home
              </a>
              <select
                className="bg-transparent text-customPink hover:text-customBlue"
                name=""
                id=""
              >
                <option value=""></option>
              </select>
            </li>
            <li>
              <a href="/pages">Pages</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <form className="hidden md:flex md:items-center">
          <input
            type="text"
            className="h-full w-[266px] border-2 focus:border-customPink focus:outline-none md:hidden lg:flex"
          />
          <button
            type="submit"
            className="h-full w-[51px] bg-customPink text-white hover:bg-customBlue focus:outline-none"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <IoMenu onClick={toggleMenu} className="menu h-auto w-6 md:hidden" />
      </nav>
    </div>
  );
};

export default NavBar;

{
  /* <div
  className={`fixed right-0 top-0 z-10 h-full transform overflow-y-auto bg-white font-lato text-customBlue transition-transform md:flex md:gap-8 ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  } duration-300`}
></div>;
 */
}
