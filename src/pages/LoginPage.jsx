import React from "react";
import LoginForm from "../components/common/LoginForm";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const LoginPage = () => {
  const user = useSelector((store) => store.user.value);
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Breadcrumb
        title="Login"
        links={[
          { title: "home", url: "/" },
          { title: "login", url: "#" },
        ]}
      />
      <div className="mt-9 flex justify-center">
        <LoginForm />
      </div>
    </>
  );
};
