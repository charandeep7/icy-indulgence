"use client";
import { Button } from "@nextui-org/button";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
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
  const handleFavorite = () => {
    handleConfetti()
    toast.success('Still working on it', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  }
  return (
    <Button
      className="bg-[#FF4081] w-1/2 p-2"
      size="md"
      onPress={handleFavorite}
      endContent={<FaHeart />}
    >
      Favorite
    </Button>
  );
}
