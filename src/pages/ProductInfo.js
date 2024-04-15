import { useState, useEffect } from "react";
import { useTitle } from "../hooks/useTitle";
import { useParams } from "react-router-dom";
import products from "../components/products";
import { useCart } from "../context/CardContext";

export const ProductInfo = () => {
  useTitle("ProductInfo");
  const add =
    "text-white sm:float-left float-right mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  const remove =
    "text-white sm:float-left float-right mt-5 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
  const [clicked, setClicked] = useState(false);
  const { cartList, addToCart, removeItem } = useCart();

  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const foundProduct = products.find(
      (item) => item.id === parseInt(productId)
    );
    setProduct(foundProduct);
  }, [productId]);

  useEffect(() => {
    // Check if product is not null or undefined before accessing its properties
    if (product) {
      const productCart = cartList.find(
        (cartItem) => cartItem.id === product.id
      );
      setClicked(!!productCart); // Set clicked based on whether the product is in cartList
    }
  }, [cartList, product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, price, image } = product;

  return (
    <div className="flex  sm:flex-wrap minjustify-start sm:justify-center">
      <div className="m-10 w-1/3 sm:w-full sm:m-5">
        <img src={image} alt="" />
      </div>
      <div className="my-10 w-1/2 mr-10 sm:mx-5 sm:mt-0 sm:w-full ">
        <h1 className="text-2xl mb-2 sm:w-full">{name}</h1>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          veniam adipisci quod maiores laudantium doloremque sit expedita error.
          Natus ipsam esse magnam nostrum ipsa hic perferendis mollitia
          dignissimos corrupti corporis?
        </div>
        <div className="text-2xl mt-5 font-bold">
          Going hot for: ${price}.99
        </div>
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
  );
};
