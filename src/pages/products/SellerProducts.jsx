import React from "react";
import { Breadcrumb } from "../../components/common/Breadcrumb";

export const SellerProducts = () => {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b px-4 py-2">Nike Chair</td>
              <td class="border-b px-4 py-2">25</td>
              <td class="border-b px-4 py-2">200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
