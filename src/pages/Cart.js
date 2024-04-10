import { useTitle } from "../hooks/useTitle";
import { Itemslist } from "../components";
import { useCart } from "../context/CardContext";

export const Cart = () => {
  useTitle("Cart");

  const { cartList } = useCart();

  return (
    <section>
      <Itemslist products={cartList} />
    </section>
  );
};
