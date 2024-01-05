import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "./common/ProductCard";

export const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchApi = () => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products?per_page=6")
      .then((res) => {
        setProducts(res.data.products);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="mb-10 mt-10">
      <h1 className="text-center font-josefin text-3xl font-bold xl:text-[42px]">
        Latest Products
      </h1>
      <ul className="container mt-10 grid place-items-center gap-16 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => {
          return (
            <ProductCard
              name={product.name}
              price={product.price}
              thumbnail={product.image}
            />
          );
        })}
      </ul>
    </div>
  );
};
