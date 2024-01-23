import React from "react";
import Login from "../components/common/LoginForm";
import { Breadcrumb } from "../components/common/Breadcrumb";

export const LoginPage = () => {
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
        <Login />
      </div>
    </>
  );
};
