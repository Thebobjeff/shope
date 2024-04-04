import { useTitle } from "../hooks/useTitle";
import { Page } from "../components";
export const Home = () => {
  useTitle("Home");
  console.log("Loaded");
  return (
    <section>
      <Page />
    </section>
  );
};
