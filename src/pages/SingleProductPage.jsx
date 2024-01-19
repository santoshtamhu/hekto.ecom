import { useEffect, useState } from "react";
import { Breadcrumb } from "../components/common/Breadcrumb";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaRegHeart, FaArrowRight } from "react-icons/fa";

export const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const { slug } = useParams();

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
      <div className="container mb-24 mt-24">
        <div className=" h-[450px] w-[1150px] shadow-lg shadow-[#C2C5E1]">
          <div className="flex">
            <div className="w-1/2">
              <img
                src={product.image}
                alt=""
                className="ml-5 mr-5 mt-[25px] h-[400px] w-[550px] object-contain"
              />
            </div>
            <div className="w-1/2 pl-10 pt-16">
              <h1 className="font-Josefin text-primary-dark text-[36px] font-semibold">
                {product.name}
              </h1>
              <div className="flex gap-5">
                <p className="text-primary-dark">$32.00</p>{" "}
                <p className="text-secondary text-[16px] line-through">
                  ${product.price}
                </p>{" "}
              </div>
              <p className="text-primary-dark pt-3 font-semibold">Color</p>
              <p className="pb-8 pt-3 text-[#A9ACC6]">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                velit eaque vero ad commodi mollitia rerum illo iusto! Autem
                explicabo laboriosam iusto sunt optio harum voluptatibus,
                ratione cumque? Itaque, harum?
              </p>
              <p className="font-Josefin text-primary-dark flex items-center gap-7 pl-16 pt-5">
                {" "}
                Add To Cart <FaRegHeart />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32 h-[500px] bg-[#F9F8FE]">
        <div className="container">
          <div className="font-Josefin flex gap-20 pt-24 text-xl font-semibold text-[#151875]">
            <p className="hover:underline">Description</p>
            <p className="hover:underline">Additional Info</p>
            <p className="hover:underline">Reviews</p>
            <p className="hover:underline">Video</p>
          </div>
          <div className="font-Josefin mb-4 mt-14">
            <h1 className="pb-3 text-lg text-[#151875] ">Varius tempor.</h1>
            <p className="text-[#A9ACC6]">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
              justo, tortor sed donec tempus. Imperdiet consequat, quis diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
          <div className="font-Josefin">
            <h1 className="pb-3 text-lg text-[#151875] ">More details</h1>
            <p className="group flex items-center gap-2 text-[#A9ACC6]">
              {" "}
              <FaArrowRight className="text-black group-hover:text-[#2F1AC4]" />{" "}
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
            <p className="group flex items-center gap-2 text-[#A9ACC6]">
              {" "}
              <FaArrowRight className="text-black group-hover:text-[#2F1AC4]" />{" "}
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
            <p className="group flex items-center gap-2 text-[#A9ACC6]">
              {" "}
              <FaArrowRight className="text-black group-hover:text-[#2F1AC4]" />{" "}
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
            <p className="group flex items-center gap-2 text-[#A9ACC6]">
              {" "}
              <FaArrowRight className="text-black group-hover:text-[#2F1AC4]" />{" "}
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
