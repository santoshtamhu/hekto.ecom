import { useSelector } from "react-redux";
import { Breadcrumb } from "../components/common/Breadcrumb";

export const Cart = () => {
  let cartItems = useSelector((store) => store.cart.value);
  return (
    <>
      <Breadcrumb
        title="Cart Items"
        links={[
          { title: "Home", url: "/" },
          { title: "Cart", url: "" },
        ]}
      />
      <table class="container mt-6 w-full overflow-hidden rounded-lg border bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th class="border-b px-4 py-2">Name</th>
            <th class="border-b px-4 py-2">Price</th>
            <th class="border-b px-4 py-2">In Stock</th>
            <th class="border-b px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((items) => {
            return (
              <>
                <tr className="text-center">
                  <td class="border-b px-4 py-2">{items.name}</td>
                  <td class="border-b px-4 py-2">{items.price}</td>
                  <td class="border-b px-4 py-2">{items.in_stock}</td>
                  <td class=" flex justify-center gap-4 border-b px-4 py-2 text-center">
                    {items.quantity}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
