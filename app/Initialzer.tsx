"use client";
import { type AppDispatch } from "./redux/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { cartItems, setCart } from "./redux/slice/AddtocartSlice";

export function Initialzer() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem("carts");
      const carts = storage ? JSON.parse(storage) : [];
      dispatch(setCart(carts));
      if (carts) {
        dispatch(cartItems());
      }
    }
  }, [dispatch]);
  return <></>;
}
