import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";
import { useEffect, useState } from "react";

export const Card = ({ product }) => {
  const add =
    "text-white sm:hidden bg-blue-700 hover:bg-blue-800 duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  const remove =
    "text-white sm:hidden bg-red-700 hover:bg-red-800 duration-200  focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
  const [clicked, setClicked] = useState(false);
  const { cartList, addToCart, removeItem } = useCart();
  const { id, name, price, image } = product;

  useEffect(() => {
    if (product) {
      const productCart = cartList.find(
        (cartItem) => cartItem.id === product.id
      );
      setClicked(!!productCart); // Set clicked based on whether the product is in cartList
    }
  }, [cartList, product]);
  return (
    <div className="m-3 w-full  sm:mr-2 max-w-sm bg-white duration-150 hover:bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/product/${id}`}>
        <img className="p-8 rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/product/${id}`}>
          <h5 className="text-xl mb-1 font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-3xl sm:mt-2 font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <button
            onClick={
              clicked ? () => removeItem(product) : () => addToCart(product)
            }
            className={clicked ? remove : add}
          >
            {clicked ? "Remove Item" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
