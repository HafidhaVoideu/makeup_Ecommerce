import { Outlet } from "react-router-dom";
import Header from "../global/header/Header";
import Footer from "../global/footer/Footer";
import Sidebar from "../global/sidebar/Sidebar";
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Sidebar />
    </>
  );
};

export default Layout;
