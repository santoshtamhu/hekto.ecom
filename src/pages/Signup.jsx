import React from "react";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        name: event.target.name.value,
        role: event.target.role.value,
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((res) => {
        toast("Sign Up successful!");
        navigate("/login");
      })
      .catch((err) => {
        let errorMsg = "";
        err.response.data.errors.forEach((el) => {
          errorMsg += `${el.param}: ${el.msg} , `;
        });
        toast.error(errorMsg);
      });
  };
  return (
    <>
      <Breadcrumb
        title="Sign Up"
        links={[
          { title: "home", url: "/" },
          { title: "signup", url: "#" },
        ]}
      />
      <div className="flex justify-center">
        <div className="mb-96 mt-9 grid h-96 w-80 place-content-center font-lato shadow-2xl  lg:mt-28 lg:h-[474px] lg:w-[544px]">
          <div className=" text-center">
            <p className=" mb-2 font-josefin text-2xl font-bold md:text-4xl">
              Sign Up
            </p>
            <div className="text-sm text-slate-400">
              Please sign up using account details below.
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-3 grid place-items-center gap-2 text-center"
            >
              <input
                className="h-12 w-[230px] border-2 pl-3 text-sm focus:border-customPink focus:outline-none lg:w-[432px]"
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <select name="role">
                <option value="">select role</option>
                <option value="buyer">buyer</option>
                <option value="seller">seller</option>
              </select>
              <input
                className="h-12 w-[230px] border-2 pl-3 text-sm focus:border-customPink focus:outline-none lg:w-[432px]"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <input
                className="h-12 w-[230px] border-2 pl-3 text-sm focus:border-customPink focus:outline-none lg:w-[432px]"
                type="password"
                name="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="h-[47px] w-[230px] bg-customPink pb-1 text-white hover:bg-customBlue focus:outline-none lg:w-[432px] lg:font-bold"
              >
                Sign Up
              </button>
            </form>
            <div className="pt-3 text-sm text-slate-400 md:text-base">
              Already have an account?{" "}
              <span>
                <Link className="hover:underline" to="/login">
                  Login!
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
