"use client";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import Special3d from "./special3d/page";
import { Button } from "@nextui-org/react";
import { IoIosIceCream } from "react-icons/io";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function Specials() {
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    router.refresh()
  },[session])
  return (
    <div className="ml-0 sm:ml-8">
      <div>
        <h1 className="p-1 pl-4 text-4xl font-semibold">Hello, Kitish !</h1>
        <p className="p-1 pl-4 text-2xl">{`French Vanilla is your ice-cream of the day !`}</p>
      </div>
      <div className="flex flex-col gap-4 items-center md:gap-4 md:flex-row p-4">
        <div className="flex flex-col gap-2 items-center justify-center shadow-md dark:shadow-gray-700 p-4 rounded-sm w-[100%] sm:w-1/2 md:w-1/3">
          <Image
            as={NextImage}
            src={"/vanilla/organic.jpg"}
            alt="organic"
            height={400}
            width={400}
            className="h-unit-8xl w-full object-cover"
            isZoomed
            isBlurred
            radius="sm"
          />
          <Button
            as={Link}
            href="#"
            color="danger"
            variant="faded"
            fullWidth
            endContent={<IoIosIceCream />}
          >
            Learn More
          </Button>
        </div>
        <div className="h-unit-8xl shadow-md dark:shadow-gray-700 w-[100%] sm:w-1/2 md:w-2/3 rounded">
          <Special3d />
        </div>
      </div>
    </div>
  );
}
