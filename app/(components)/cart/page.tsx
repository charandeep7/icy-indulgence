"use client";
import { Button } from "@nextui-org/button";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { decrement, increment } from "@/app/redux/slice/AddtocartSlice";
import { Image } from "@nextui-org/react";
import NextLink from 'next/link'

export default function page() {
  const data = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const { isLoading, value, items } = data;
  return (
    <div>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x-1 divide-y-1 dark:divide-slate-800 border border-b-1 dark:border-slate-800">
          {items.map(({ id, subtype, price, img }, index) => {
            const quantity = value.find((v) => v.id === id)?.count || 0;
            return (
              <div key={index} id={subtype} className="flex justify-around gap-2 p-4">
                <div className="w-1/2 sm:w-1/3">
                  <Image
                    src={img}
                    alt={subtype}
                    width={250}
                    height={300}
                    isBlurred
                    className="w-[250px] h-[300px] object-contain"
                  />
                </div>
                <div className="w-1/2 sm:w-2/3 flex flex-col gap-2 justify-around">
                  <div className="">
                    <h1 className="text-xl sm:text-2xl font-bold">{subtype}</h1>
                    <p className="text-lg sm:text-xl text-default-500">
                      ₹{(price * quantity).toFixed(3)}
                    </p>
                    <p>Total: {quantity}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="faded" color="secondary" onPress={() => dispatch(increment(id))}>
                      Increase
                    </Button>
                    <Button variant="faded" color="secondary" onPress={() => dispatch(decrement(id))}>
                      Decrease
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="font-bold">
            It's empty <span className="text-4xl">🛒</span>
          </h1>
        </div>
      )}
      <div>
        <Button
          className="fixed bottom-5 right-5 p-6 bg-green-500"
          endContent={<RiSecurePaymentLine />}
          as={NextLink}
          href="/checkout"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
