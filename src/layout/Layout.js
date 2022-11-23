import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ favoritos }) => {
  return (
    <>
      <Header props={favoritos} />
      <Outlet />
      <Footer />
    </>
  );
};
