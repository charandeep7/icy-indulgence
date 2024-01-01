import Faq from "./(components)/Faq/page";
import Footer from "./(components)/Footer/page";
import Ads from "./(components)/Hero/Ads";
import Hero from "./(components)/Hero/page";
import Header from "./(components)/Navbar/page";

export default function Home(){
  return (
    <div>
      <Header />
      <Hero />
      <Faq />
      <Footer />
    </div>
  )
}