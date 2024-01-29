"use client"
import { FaHeart } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
export default function FavoriteButton({id}: {
    id: number
}) {
  return (
    <Button
      className="bg-[#FF4081] w-1/2 p-2"
      endContent={<FaHeart />}
      size="md"
      onPress={() => alert(id)}
    >
      Favorite
    </Button>
  );
}