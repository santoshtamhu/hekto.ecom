import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { cartIncrement } from "../../../app/slice/cartSlice";
import ProtectedComponent from "../ProtectedComponent";

export const CartIcon = () => {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(cartIncrement());
  };
  return (
    <div className="flex-center h-[30px] w-[30px] rounded-full hover:bg-[#EEEFFB]">
      <LuShoppingCart onClick={handleCart} className="text-[#2F1AC4]" />
    </div>
  );
};
