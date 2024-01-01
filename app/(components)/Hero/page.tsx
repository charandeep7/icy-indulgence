import Ads from "./Ads";
import ImageCarousel from "./Carousel";
import MenuLists from "./MenusLists";
import Tags from "./Tags";

export default function Hero() {
  return (
    <div>
      <ImageCarousel />
      <Ads />
      <MenuLists />
      <Tags />
    </div>
  );
}
