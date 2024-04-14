import { Routes, Route } from "react-router-dom";
import { Home, Cart, Page404, ProductInfo } from "../pages";

export const AllRouts = () => {
  return (
    <main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="shope/cart" element={<Cart />} />
        <Route path="product/:productId" element={<ProductInfo />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
  );
};
