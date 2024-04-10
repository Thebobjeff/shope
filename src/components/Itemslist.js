import { useCart } from "../context/CardContext";
import { ListCard } from "./ListCard";

export const Itemslist = ({ products }) => {
  const { total } = useCart();

  return (
    <section className="justify-center">
      <div className="m-10 ">
        <h1 className="text-4xl font-bold text-center">Cart Size = ${total}</h1>
      </div>
      <div className=" m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((info) => (
                <ListCard key={info.id} products={info} />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
