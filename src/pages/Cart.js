import { useTitle } from "../hooks/useTitle";
import { Itemslist } from "../components";

export const Cart = () => {
  useTitle("Cart");

  return (
    <section>
      <Itemslist />
    </section>
  );
};
