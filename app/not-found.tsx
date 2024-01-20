import { Button } from "@nextui-org/button";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex items-center justify-center mx-4 md:w-2/3">
        <div className="flex flex-col items-center py-16">
          <img
            className="px-4 hidden md:block"
            src="/er1.png"
            alt="e1"
          />
          <img
            className="md:hidden"
            src="/er2.png"
            alt="e2"
          />
          <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-500">
            OOPS!
          </h1>
          <p className="px-4 pb-10 text-base leading-none dark:text-gray-200 text-center text-gray-600">
            No signal here! we cannot find the page you are looking for
          </p>
          <Button className="mx-4 h-10 w-44  rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800" as={Link} href="/">
            HOME
          </Button>
        </div>
      </div>
    </div>
  );
}
