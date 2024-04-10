import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cardReducer";

const initState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);

  const addToCart = (product) => {
    const updatedCart = state.cartList.concat(product);
    priceUpdate(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };
  const removeItem = (product) => {
    const deleteItem = state.cartList.filter(
      (current) => current.id !== product.id
    );
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: deleteItem,
      },
    });
    priceUpdate(deleteItem);
  };
  const priceUpdate = (product) => {
    let total = 0;
    product.forEach((product) => (total = total + product.price));
    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };
  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
