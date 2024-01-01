import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="flex justify-center">
      <nav className="flex w-[1177px] justify-between py-6">
        <div className="flex  items-center gap-24">
          <h1 className=" font-josefin text-4xl font-bold">Hekto</h1>
          <ul className="flex gap-8 font-lato text-customBlue">
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
        <form className="flex items-center">
          <input
            type="text"
            className="h-full border-2 focus:border-customPink focus:outline-none"
            style={{ width: "266px" }}
          />
          <button
            type="submit"
            className="h-full bg-customPink text-white hover:bg-customBlue focus:outline-none"
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
