import { Card } from "./Card";

export const Page = ({ products }) => {
  return (
    <main className="flex flex-wrap justify-center">
      {products &&
        products.map((info) => <Card key={info.id} product={info} />)}
    </main>
  );
};
