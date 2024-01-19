"use client";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
} from "@/app/redux/slice/AddtocartSlice";
import { AppDispatch } from "@/app/redux/store";
interface CardProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
}

const Card = async ({ id, title, price, quantity, img }: CardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div className="flex justify-around gap-2 p-4">
        <div className="w-1/2 sm:w-1/3">
          <Image src={img} alt={title} width={200} height={200} isBlurred />
        </div>
        <div className="w-1/2 sm:w-2/3 flex flex-col gap-2 justify-around">
          <div className="">
            <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
            <p className="text-lg sm:text-xl text-default-500">₹{(price * quantity).toFixed(3)}</p>
            <p>Total: {quantity}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button onPress={() => dispatch(increment(id))}>Increase</Button>
            <Button onPress={() => dispatch(decrement(id))}>Decrease</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
