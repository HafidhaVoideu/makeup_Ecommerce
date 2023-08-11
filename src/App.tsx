import "./App.css";
import Shop from "./pages/shop/Shop";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Blog from "./pages/blog/Blog";
import { Route, Routes } from "react-router";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home-1/Home";
import About from "./pages/about/About";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/item/:itemid" element={<ItemDetails />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
