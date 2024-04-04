import { Routes, Route } from "react-router-dom";
import { Home, Cart, Page404 } from "../pages";

export const AllRouts = () => {
  return (
    <main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="shope/cart" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
  );
};
