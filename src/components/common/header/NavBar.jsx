import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" flex w-full justify-center bg-white">
      <nav className="container flex w-full justify-between px-3 py-2 lg:px-8 xl:px-0 ">
        <div className="flex items-center md:gap-16">
          <Link to="/" className="pt-2 font-josefin text-4xl font-bold">
            Hekto
          </Link>
          <ul
            className={`font-lato text-customBlue md:flex md:gap-8 ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            <li>
              <Link className="text-customPink hover:text-customBlue" to="/">
                Home
              </Link>
              <select
                className="bg-transparent text-customPink hover:text-customBlue"
                name=""
                id=""
              >
                <option value=""></option>
              </select>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/products?searchTerm=" + e.target.searchTerm.value);
          }}
          className="hidden md:flex md:items-center"
        >
          <input
            type="text"
            name="searchTerm"
            className="h-10 w-[266px] border-2 focus:border-customPink focus:outline-none md:hidden lg:flex"
          />
          <button
            type="submit"
            className="h-10 w-[51px] bg-customPink text-white hover:bg-customBlue focus:outline-none"
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
