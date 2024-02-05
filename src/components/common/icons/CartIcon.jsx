import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../app/slice/cartSlice";
import { toast } from "react-toastify";
import { LoginPopUp } from "../LoginPopUp";
import { useState } from "react";

export const CartIcon = ({ product }) => {
  const user = useSelector((store) => store.user.value);
  const [loginPopup, setLoginPopup] = useState(false);
  const dispatch = useDispatch();
  const handleCart = (e) => {
    if (user?.role == "buyer") {
      dispatch(addToCart(product));
      // dispatch(cartIncrement());
    } else if (user?.role == "seller") {
      toast.error("login as a buyer first!");
    } else {
      setLoginPopup(true);
    }
  };
  return (
    <div className="flex-center h-[30px] w-[30px] rounded-full hover:bg-[#EEEFFB]">
      <button type="button " onClick={handleCart}>
        <LuShoppingCart className="text-[#2F1AC4]" />
      </button>
      {loginPopup && <LoginPopUp onClose={() => setLoginPopup(false)} />}
    </div>
  );
};
