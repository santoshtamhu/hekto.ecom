import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/common/Breadcrumb";

import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../components/common/constants/domian";

export const SellerProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let access_token = localStorage.getItem("access_token");

    axios
      .get(`${API_URL}/products?sellerproducts`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        setProducts(res.data.products);
      });
  }, []);
  return (
    <>
      <Breadcrumb
        title="My Products"
        links={[
          { title: "Home", url: "/" },
          { title: "Products", url: "" },
          { title: "My Products", url: "" },
        ]}
      />
      <div class="container mt-12">
        <table class="w-full overflow-hidden rounded-lg border bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th class="border-b px-4 py-2">Name</th>
              <th class="border-b px-4 py-2">Price</th>
              <th class="border-b px-4 py-2">In Stock</th>
              <th class="border-b px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <>
                  <tr className="text-center">
                    <td class="border-b px-4 py-2">{product.name}</td>
                    <td class="border-b px-4 py-2">{product.price}</td>
                    <td class="border-b px-4 py-2">{product.in_stock}</td>
                    <td class=" flex justify-center gap-4 border-b px-4 py-2 text-center">
                      <Link to={`/products/my-products/edit/${product._id}`}>
                        <span>Edit</span>
                      </Link>
                      <button>Delete</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
