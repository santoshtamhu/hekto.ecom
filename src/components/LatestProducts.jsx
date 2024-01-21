import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "./common/ProductCard";

export const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = () => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products?per_page=12")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading)
    return (
      <div className="container mt-16 font-lato font-bold">Loading...</div>
    );
  if (error)
    return (
      <div className="container mt-16 font-lato font-bold">
        Error: {error.message}
      </div>
    );

  return (
    <div className="mb-10 mt-10">
      <h1 className="text-center font-josefin text-3xl font-bold xl:text-[42px]">
        Latest Products
      </h1>
      <ul className="container mt-10 grid place-items-center gap-16 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {products.map((el) => {
          return <ProductCard key={el._id} product={el} />;
        })}
      </ul>
    </div>
  );
};
