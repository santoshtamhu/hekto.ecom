import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { API_URL } from "../../components/common/constants/domian";
import { Breadcrumb } from "../../components/common/Breadcrumb";
import { GridView } from "./GridView";
import { ListView } from "./ListView";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [viewToggle, setViewToggle] = useState(true);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let searchTerm = searchParams.get("searchTerm") || "";
    axios
      .get(`${API_URL}/products?search_term=${searchTerm}`)
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [searchParams]);

  return (
    <>
      <div>
        <Breadcrumb
          title="Products"
          links={[
            { title: "Home", url: "/" },
            { title: "Products", url: "" },
          ]}
        />
      </div>
      <div>
        view:{" "}
        <button
          onClick={() => {
            setViewToggle(true);
          }}
        >
          <FaListUl />
        </button>
        <button
          onClick={() => {
            setViewToggle(false);
          }}
        >
          <IoGrid />
        </button>
      </div>

      {viewToggle ? (
        <ListView product={product} />
      ) : (
        <GridView product={product} />
      )}
    </>
  );
};

export default Products;
