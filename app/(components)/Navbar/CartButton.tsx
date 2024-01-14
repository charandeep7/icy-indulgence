"use client";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FaCartShopping } from "react-icons/fa6";
import NextLink from "next/link";
import { useEffect, useState, useRef } from "react";
import { Image } from "@nextui-org/react";
import { IoCloseSharp } from "react-icons/io5";

interface CardProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
  alt: string;
}

const Card = ({ id, title, price, quantity, img, alt }: CardProps) => {
  return (
    <>
      <div className="flex justify-around p-4">
        <div className="w-1/2">
          <Image src={img} alt={alt} width={200} height={200} isBlurred />
        </div>
        <div className="w-1/2 flex flex-col gap-2 justify-around">
          <div className="">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-xl text-default-500">₹{price}</p>
            <p>Total: {quantity}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button>Increase</Button>
            <Button>Decrease</Button>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default function CartButton() {
  const [open, setOpen] = useState(false);
  const item = {
    id: 1,
    title: "Classic Vanilla",
    price: 258.15,
    quantity: 10,
    img: "/vanilla/french-vanilla.png",
    alt: "image",
  };
  const items = [item,item,item,item];
  return (
    <div id="cart-container" className={`relative ${open ? "z-50" : ""}`}>
      <div className="relative">
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
              {items.map(({ id, title, price, quantity, img, alt }, index) => (
                <Card
                  key={index}
                  id={id}
                  title={title}
                  price={price}
                  quantity={quantity}
                  img={img}
                  alt={alt}
                />
              ))}
            </div>
            <div className="flex justify-evenly gap-2 p-4">
              <Button
                fullWidth
                className="bg-blue-400"
                as={NextLink}
                href="/cart"
                onClick={() => setOpen(false)}
              >
                Expand
              </Button>
              <Button fullWidth className="bg-green-500">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
