import Faq from "./(components)/Faq/page";
import Hero from "./(components)/Hero/page";
import ProductList from "./(components)/ProductList/page";
import Tags from "./(components)/Tags/page";

export default function Home(){
  return (
    <div>
      <Hero />
      <ProductList />
      <Tags />
      <Faq />
    </div>
  )
}