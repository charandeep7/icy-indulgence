import { Suspense } from "react";
import Faq from "./(components)/Faq/page";
import Hero from "./(components)/Hero/page";
import ProductList from "./(components)/ProductList/page";
import Tags from "./(components)/Tags/page";
import Loading from "./loading";

export default function Home() {
  return (
    <div>
      {/* <Hero />
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
      <Tags />
      <Faq /> */}
    </div>
  );
}