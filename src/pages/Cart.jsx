import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  let cart = useSelector((store) => store.cart.value);
  return <div>Cart({cart})</div>;
};
