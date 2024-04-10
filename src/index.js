import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Route } from "react-router-dom";
import { CartProvider } from "./context/CardContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Route>
      <CartProvider>
        <App />
      </CartProvider>
    </Route>
  </React.StrictMode>
);
