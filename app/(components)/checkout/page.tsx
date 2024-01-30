import React from "react";
import { Meteors } from "@/app/components/ui/meteors";
import { Button } from "@/app/components/ui/moving-border";
import Link from "next/link";

export default function MeteorsDemo() {
  return (
    <div className="flex justify-center items-center min-h-[55vh]">
      <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-300 dark:bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-800 dark:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl mb-4 relative select-none">
            Icy Indulgence
          </h1>

          <div>
            <p className="font-normal text-base text-slate-500 mb-1 relative select-none">
              {`Sorry, but Icy Indulgence doesn't exist in real. This website is
              made only for educational purpose. However, we hope you enjoy
              exploring the virtual world of Icy Indulgence and learning more
              about our imaginary ice cream creations.`}
            </p>
            <h4 className="text-right text-sm font-bold cursor-pointer">
              <a target="_blank" href="https://portfolio-revisit.vercel.app/">
                - KITISH
              </a>
            </h4>
          </div>

          <Button
            as={Link}
            href='/'
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Home
          </Button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
