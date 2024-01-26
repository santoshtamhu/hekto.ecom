import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "../../components/common/icons/CartIcon";
import { HeartIcon } from "../../components/common/icons/HeartIcon";
import { MagnifyingGlassIcon } from "../../components/common/icons/MagnifyingGlassIcon";
import { API_URL } from "../../components/common/constants/domian";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/products`).then((res) => {
      setProduct(res.data.products);
    });
  }, []);

  return (
    <>
      <div className="container mt-28">
        {product.map((e) => {
          return (
            <div className="mb-7 h-[230px] w-[921px] shadow">
              <div className="flex gap-[29px] p-[18px]">
                <img className="h-48 w-72" src={e.image} alt="" />
                <div>
                  <Link to={`/products/${e._id}`}>
                    <span className="flex items-center gap-[67px] font-josefin text-[18px] font-bold text-customBlue">
                      {e.name}
                      <div class="h-2.5 w-2.5 rounded-full bg-orange-400"></div>
                    </span>
                  </Link>

                  <div class="font-josefin text-sm font-normal text-customBlue">
                    $26.00
                  </div>
                  <div class="w-96 font-lato text-base font-normal leading-7 text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </div>
                  <div className="group-hover flex gap-[31px]">
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

export default Products;
