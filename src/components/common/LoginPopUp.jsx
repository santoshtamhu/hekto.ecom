import React from "react";
import LoginForm from "./LoginForm";

export const LoginPopUp = ({ onClose }) => {
  return (
    <>
      <div className="fixed left-1/2 top-1/2 z-20 h-[474px] -translate-x-1/2 -translate-y-1/2 transform bg-white">
        <div className="relative ">
          <LoginForm />
          <button
            className="absolute left-[510px] top-4
             z-30 font-lato text-lg text-slate-500 hover:text-black"
            onClick={onClose}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};
