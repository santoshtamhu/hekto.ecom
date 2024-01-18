import { useEffect, useState } from "react";
import { Breadcrumb } from "../components/common/Breadcrumb";
import axios from "axios";
import { useSearchParams, useParams, Link } from "react-router-dom";
import { LuHeart } from "react-icons/lu";

export const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/" + slug)
      .then((res) => {
        setProduct(res.data.data);
      });
  }, []);

  return (
    <div>
      <Breadcrumb
        title={product.name}
        links={[
          { title: "home", url: "/" },
          { title: "products", url: "/products" },
          { title: product.name, url: "#" },
        ]}
      />
      <div className="flex justify-center">
        <div class="mt-9 w-80 rounded-sm bg-white shadow md:mt-32 md:h-96 md:w-[700px]  xl:h-[509px] xl:w-[1170px]">
          <div className="m-4 md:grid md:grid-cols-2">
            <div>
              <img src="https://picsum.photos/200" className="w-full" alt="" />
            </div>
            <div>
              <div class="font-josefin font-semibold text-customBlue md:text-4xl">
                Playwood arm chair
              </div>
              <div className="flex gap-5">
                <div class="font-josefin text-base font-normal capitalize leading-7 text-customBlue">
                  $32.00
                </div>
                <div class="font-josefin text-base font-normal capitalize leading-7 text-customPink line-through">
                  $32.00
                </div>
              </div>
              <div class="font-josefin text-base font-semibold text-indigo-950">
                Color
              </div>
              <div class="font-josefin leading-7 text-slate-400 md:text-base md:font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              </div>
              <Link className="flex items-center gap-3 font-josefin text-base font-normal capitalize leading-7 text-customBlue">
                <span>Add To cart</span>
                <LuHeart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
