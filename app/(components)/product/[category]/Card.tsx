import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import v1 from "@/public/vanilla/v1.jpg";
import { Button } from "@nextui-org/button";
import { FaCartPlus, FaHeart } from "react-icons/fa6";
import { SiReadthedocs } from "react-icons/si";
import { IoMdShareAlt } from "react-icons/io";
import Link from "next/link";
import ShareButton from "./ShareButton";

export default function Card({subtype,price,more}:{
  subtype: string,
  price: string,
  more: string
}) {
  return (
    <div className="shadow-lg rounded-md sm:max-w-[350px] flex flex-col p-2 items-center h-[450px] border border-slate-300 border-opacity-30">
      <div className="rounded-md overflow-hidden mb-2">
        <Image
          as={NextImage}
          src={v1.src}
          height={400}
          width={400}
          alt="vanilla"
          className="h-80 w-full object-cover"
          isZoomed
        />
      </div>
      <div className="flex w-full mb-2 justify-evenly">
        <p className="font-semibold text-lg">{subtype}</p>
        <p className="font-semibold text-base text-default-500">{price}</p>
      </div>
      <div className="w-full flex flex-col justify-end">
        <div className="flex space-x-2 mt-auto">
          <Button
            className="bg-[#FFA500] w-1/2 p-2"
            endContent={<FaCartPlus />}
            size="md"
          >
            Add to Cart
          </Button>
          <Button
            className="bg-[#FF4081] w-1/2 p-2"
            endContent={<FaHeart />}
            size="md"
          >
            Favorite
          </Button>
        </div>
        <div className="flex space-x-2 mt-2">
          <Button
            className="bg-[#4CAF50] w-1/2 p-2"
            endContent={<SiReadthedocs />}
            size="md"
            as={Link}
            href={more}
          >
            View More
            
          </Button>
          <ShareButton subtype={subtype} />
        </div>
      </div>
    </div>
  );
}
