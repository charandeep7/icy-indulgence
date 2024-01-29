import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Button } from "@nextui-org/button";
import { FaCartPlus, FaHeart } from "react-icons/fa6";
import { SiReadthedocs } from "react-icons/si";
import Link from "next/link";
import ShareButton from "./ShareButton";
import AddToCart from "./AddToCart";
import FavoriteButton from "./FavoriteButton";

export default function Card({id,subtype,price,more,img,quantity}:{
  id: number,
  subtype: string,
  price: number,
  more: string,
  img: string,
  quantity: number
}) {
  return (
    <div className="shadow-lg rounded-md sm:max-w-[350px] flex flex-col p-2 items-center h-[450px] border border-slate-300 border-opacity-30">
      <div className="rounded-md overflow-hidden mb-2">
        <Image
          as={NextImage}
          src={img}
          height={400}
          width={400}
          alt="vanilla"
          className="h-80 w-full object-cover"
          isZoomed
        />
      </div>
      <div className="flex w-full mb-2 justify-evenly">
        <p className="font-semibold text-lg">{subtype}</p>
        <p className="font-semibold text-base text-default-500">₹{price}</p>
      </div>
      <div className="w-full flex flex-col justify-end">
        <div className="flex space-x-2 mt-auto">
         <AddToCart id={id} subtype={subtype} />
          <FavoriteButton id={id} />
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
