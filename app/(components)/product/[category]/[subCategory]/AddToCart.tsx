"use client";
import { cartItems, decrement, increment, init } from "@/app/redux/slice/AddtocartSlice";
import { Button } from "@nextui-org/button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "@/app/redux/store";

export default function AddToCart({ id }: { id: number }) {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.cart);
  const { value } = data;
  const handlePlusCart = () => {
    dispatch(increment(id));
    dispatch(init());
    if(!value.find(item => item.id === id)?.count){
      dispatch(cartItems());
    }
  };
  const handleMinusCart = () => {
    dispatch(decrement(id));
    dispatch(init());
  };
  return (
    <>
      <Button
        className="bg-gray-400 dark:bg-gray-500 p-2 text-2xl rounded-r-sm"
        size="md"
        onPress={handlePlusCart}
      >
        +
      </Button>
      <span className="ml-2 mr-2 font-bold">
        {value.find(v => v.id === id)?.count || 0}
      </span>
      <Button
        className="bg-gray-400 dark:bg-gray-500 p-2 text-2xl rounded-l-sm"
        size="md"
        onPress={handleMinusCart}
      >
        -
      </Button>
    </>
  );
}
