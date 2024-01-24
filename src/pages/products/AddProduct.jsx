import React, { useEffect } from "react";
import { Breadcrumb } from "../../components/common/Breadcrumb";
import axios from "axios";

export const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let productData = {
      name: "new from axios",
      price: 100000,
    };
    let access_token = localStorage.getItem("access_token");
    axios.post(
      "https://ecommerce-sagartmg2.vercel.app/api/products",
      productData,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
  };
  return (
    <>
      <Breadcrumb
        title="Add Products"
        links={[
          { title: "Home", url: "/" },
          { title: "Products", url: "/products" },
          { title: "Add", url: "" },
        ]}
      />
      <div className="mx-auto mt-9 max-w-md rounded border bg-white p-8 font-josefin shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="product_name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              id="product_name"
              name="product_name"
              className="form-control"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="form-control"
              required
            />
          </div>

          <div>
            <label htmlFor="in-stock" className="form-label">
              In Stock
            </label>
            <input
              type="number"
              id="in-stock"
              name="in-stock"
              className="form-control"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              className="form-control"
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" className="btn w-full">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
