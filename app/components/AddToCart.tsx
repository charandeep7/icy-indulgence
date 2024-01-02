"use client";
import { Button } from "@nextui-org/button";
import confetti from "canvas-confetti";
import { FaCartPlus } from "react-icons/fa6";

const AddtoCartButton = ({ children }: { children: React.ReactNode }) => {
  // const handleConfetti = () => {
  //   confetti({
  //     // Add your confetti options here
  //     particleCount: 100,
  //     spread: 100,
  //     // ... other options
  //     // origin: 
  //   });
  // };

  return (
    <Button
      className="flex-grow bg-[#FFA500] w-1/2"
      size="lg"
      // onPress={handleConfetti}
      endContent={<FaCartPlus />}
    >
      {children}
    </Button>
  );
};

export default AddtoCartButton;

