import { Suspense } from "react";
import Ads from "./Ads";
import ImageCarousel from "./Carousel";

export default function Hero() {
  return (
    <div>
      <Suspense fallback={null}>
        <ImageCarousel />
      </Suspense>
      <Ads />
    </div>
  );
}
