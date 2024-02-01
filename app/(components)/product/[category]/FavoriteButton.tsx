"use client";
import { Button } from "@nextui-org/button";
import confetti from "canvas-confetti";
import { FaHeart } from "react-icons/fa6";

export default function FavoriteButton({ id }: { id: number }) {
  const handleConfetti = () => {
    confetti({
      // Add your confetti options here
      particleCount: 100,
      spread: 200,
      // ... other options
      // origin: 
    });
  };

  return (
    <Button
      className="bg-[#FF4081] w-1/2 p-2"
      size="md"
      onPress={handleConfetti}
      endContent={<FaHeart />}
    >
      Favorite
    </Button>
  );
}
