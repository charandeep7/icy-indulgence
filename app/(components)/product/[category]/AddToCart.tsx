"use client";
import { cartItems, increment, init } from "@/app/redux/slice/AddtocartSlice";
import { Button } from "@nextui-org/button";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "@/app/redux/store";
import toast from "react-hot-toast";
import Link from "next/link";

export default function AddToCart({
  id,
  subtype,
}: {
  id: number;
  subtype: string;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.cart);
  const { value } = data;
  const handleCart = () => {
    if (value.find((item) => item.id === id)) {
      toast.error((t) => (
        <div className="space-y-2">
          <p>
            <b>{subtype}</b> is already in cart
          </p>
          <div className="flex justify-between items-center gap-4">
            <Button
              as={Link}
              href={`/cart#${subtype}`}
              fullWidth
              color="primary"
              variant="flat"
            >
              View in Cart
            </Button>
            <Button
              onPress={() => toast.dismiss(t.id)}
              fullWidth
              color="danger"
              variant="flat"
            >
              Dismiss
            </Button>
          </div>
        </div>
      ));
      return;
    }
    dispatch(increment(id));
    dispatch(init());
    dispatch(cartItems());
    toast.success(`${subtype} added to cart`);
  };
  return (
    <Button
      className="bg-[#FFA500] w-1/2 p-2"
      endContent={<FaCartPlus />}
      size="md"
      onPress={handleCart}
    >
      Add to Cart
    </Button>
  );
}
