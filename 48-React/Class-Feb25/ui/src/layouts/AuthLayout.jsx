import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default AuthLayout;
