import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="flex justify-center">
      <nav className="flex justify-between py-6 w-[1177px]">
        <div className="items-center  flex gap-24">
          <h1 className=" font-josefin font-bold text-4xl">Hekto</h1>
          <ul className="font-lato flex gap-8 text-customBlue">
            <li>
              <a className="text-customPink hover:text-customBlue" href="/home">
                Home
              </a>
              <select
                className="bg-transparent hover:text-customBlue text-customPink"
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
        <form className="flex items-center">
          <input
            type="text"
            className="border-2 focus:outline-none focus:border-customPink h-full"
            style={{ width: "266px" }}
          />
          <button
            type="submit"
            className="bg-customPink text-white h-full focus:outline-none hover:bg-customBlue"
            style={{ width: "51px" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
