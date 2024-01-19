"use client";
import { Button } from "@nextui-org/button";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Card from "./Card";

export default function page() {
  const data = useSelector((state: RootState) => state.cart);
  const { isLoading, value, items } = data;
  return (
    <div>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x-1 divide-y-1 dark:divide-slate-800 border border-b-1 dark:border-slate-800">
          {items.map(({ id, subtype, price, img }, index) => (
            <Card
              key={index}
              id={id}
              title={subtype}
              price={price}
              quantity={value.find((v) => v.id === id)?.count || 0}
              img={img}
            />
          ))}
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
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
