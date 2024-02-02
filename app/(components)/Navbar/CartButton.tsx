"use client";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FaCartShopping } from "react-icons/fa6";
import NextLink from "next/link";
import { useState } from "react";
import { Image } from "@nextui-org/react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { type AppDispatch, type RootState } from "@/app/redux/store";
import { increment, decrement } from "@/app/redux/slice/AddtocartSlice";
import { Badge } from "@nextui-org/badge";

interface CardProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
}

const Card = ({ id, title, price, quantity, img }: CardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div className="flex justify-around p-4">
        <div className="w-1/2">
          <Image src={img} alt={title} width={200} height={200} isBlurred className="w-[200px] h-[200px] object-contain" />
        </div>
        <div className="w-1/2 flex flex-col gap-2 justify-around">
          <div className="">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-xl text-default-500">
              ₹{(price * quantity).toFixed(3)}
            </p>
            <p>Total: {quantity}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="faded" color="secondary" onPress={() => dispatch(increment(id))}>Increase</Button>
            <Button variant="faded" color="secondary" onPress={() => dispatch(decrement(id))}>Decrease</Button>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default function CartButton() {
  const [open, setOpen] = useState(false);
  const data = useSelector((state: RootState) => state.cart);
  const { isLoading, value, items } = data;
  return (
    <div id="cart-container" className={`relative ${open ? "z-50" : ""}`}>
      <div className="relative">
        <Badge content={value.length} color="danger" variant="shadow" className="z-auto">
          <Button
            size="sm"
            color="success"
            isIconOnly
            onPress={() => setOpen(!open)}
          >
            <span className="text-2xl">
              <FaCartShopping />
            </span>
          </Button>
        </Badge>
      </div>
      {open && (
        <div className="fixed right-0 top-0 h-screen bg-white dark:bg-[#0C0A09] drop-shadow-lg overflow-y-auto no-scrollbar md:w-1/2 lg:w-1/3 animate-from-right">
          <div className="flex items-center h-16 justify-between p-4">
            <h1 className="font-bold">Your Cart</h1>
            <Button
              isIconOnly
              className="bg-transparent"
              onPress={() => setOpen(false)}
            >
              <IoCloseSharp />
            </Button>
          </div>
          <Divider />
          <div className="flex flex-col justify-between">
            <div>
              {items.length > 0 ? (
                items.map(({ id, subtype, price, img }, index) => (
                  <Card
                    key={index}
                    id={id}
                    title={subtype}
                    price={price}
                    quantity={value.find((v) => v.id === id)?.count || 0}
                    img={img}
                  />
                ))
              ) : (
                <div className="flex justify-center items-center h-96">
                  <h1 className="font-bold">
                    It's empty <span className="text-4xl">🛒</span>
                  </h1>
                </div>
              )}
            </div>
            <div className="flex justify-evenly gap-2 p-4">
              <Button
                fullWidth
                className="bg-blue-400"
                as={NextLink}
                href="/cart"
              >
                Expand
              </Button>
              <Button
                fullWidth
                className="bg-green-500"
                disabled={items.length <= 0}
                as={NextLink}
                href="/checkout"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
