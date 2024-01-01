import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import s1 from "@/public/shop/s1.jpg";

export default function Ads() {
  return (
    <div className="mb-10 mt-10 p-3 gap-8 flex flex-col md:flex-row justify-evenly items-center">
      <h1 className="flex flex-col gap-8 text-4xl">
        <span className="block">Chill at Scale</span>
        <span>
          Where&nbsp;
          <span className="inline-block bg-gray-400 p-2 text-5xl rotate-3 font-bold hover:rotate-0 transition ease-in-out origin-left">
            Ice Cream
          </span>
        </span>
        <span className="block">Dreams Come True</span>
      </h1>
        <Image
          as={NextImage}
          src={s1.src}
          width={500}
          height={500}
          alt="s1"
          className="rotate-0 sm:-rotate-6 sm:hover:rotate-0"
          isBlurred
        />
    </div>
  );
}
