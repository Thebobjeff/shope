import { Card } from "./Card";

export const Page = ({ item }) => {
  return (
    <main className="flex flex-wrap justify-center">
      {item && item.map((info) => <Card key={info.id} product={info} />)}
    </main>
  );
};
