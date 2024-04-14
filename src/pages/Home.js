import { useTitle } from "../hooks/useTitle";
import { Page } from "../components";
import products from "../components/products";
import { useEffect, useState } from "react";

export const Home = () => {
  const [item, setItems] = useState([]);
  useTitle("Home");
  useEffect(() => {
    setItems(products);
  }, []);
  console.log(typeof products);
  return (
    <section>
      <Page item={item} />
    </section>
  );
};
