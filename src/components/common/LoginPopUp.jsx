import React from "react";
import LoginForm from "./LoginForm";

export const LoginPopUp = ({ onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed left-1/2 top-1/2 z-20 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center bg-transparent"
      >
        <div className="h-[474px] bg-white">
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
      </div>
    </>
  );
};
