import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { readDetailOfSingleFlavor, readDetailsOfAllFlavors } from "@/app/api/prisma/readFlavors";
import { notFound } from "next/navigation";
import AddToCart from "./AddToCart"
import { Suspense } from "react";
import Loading from "@/app/loading";

type Params = {
  params: {
    category: string;
    subCategory: string;
  };
};
export async function generateMetadata({
  params: { category, subCategory },
}: Params) {
  const title =
    subCategory.split("%20").join(" ") +
    " | " +
    category.split("%20").join(" ");
  if (!title) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title,
  };
}

export default async function SubCategory({
  params: { category, subCategory },
}: Params) {
  const productCategory = category.split("%20").join(" ");
  const productSubCategory = subCategory.split("%20").join(" ");
  const result = await readDetailOfSingleFlavor(productSubCategory)
  if(!result) {
    notFound()
  }
  const { img, price, details } = result
  const icecreamDetail = details?.at(0)
  return (
    <Suspense fallback={<Loading />}>
    <div className="flex flex-col gap-4 items-center md:gap-0 md:flex-row p-4 justify-evenly">
      <div className="shadow-md dark:shadow-gray-300 p-4 rounded-sm">
        <Image
          as={NextImage}
          src={img}
          height={400}
          width={400}
          alt={productSubCategory}
          className="h-unit-8xl w-full object-cover"
          isZoomed
          isBlurred
          radius="sm"
        />
      </div>
      <div className="flex flex-col w-10/12 md:w-1/2 gap-2 p-4 rounded-sm shadow-md dark:shadow-gray-300">
        {/* name, category & price */}
        <div>
            <h1 className="text-4xl font-bold capitalize">
                { productCategory }
            </h1>
            <h2 className="text-2xl font-bold capitalize">
                { productSubCategory} 
                <span className="ml-2 text-base text-default-500">₹{price}</span>
            </h2>
        </div>
        {/* Key Characteristics */}
        <ol className="space-y-4">
          <li>
            <strong>Flavor:</strong> {icecreamDetail?.flavor}
          </li>
          <li>
            <strong>Texture:</strong> {icecreamDetail?.texture}
          </li>
          <li>
            <strong>Versatility:</strong> {icecreamDetail?.verstaility}
          </li>
        </ol>

        {/* Conclusion */}
        <p className="TextAlignLast">
          {icecreamDetail?.desc}
        </p>

        {/* Buttons for more actions, you can replace the href with the actual URLs */}
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-2">
          <div className="flex w-1/2 items-center justify-center">
            <AddToCart id={icecreamDetail?.iceCreamId!} />
          </div>
          <Button
            className="bg-[#4CAF50] w-1/2 p-2 text-xl"
            size="md"
            as={Link}
            href={`/cart#${productSubCategory}`} // Replace with the actual URL
          >
            View Cart
          </Button>
        </div>
      </div>
    </div>
    </Suspense>
  );
}

export const revalidate = 3000000;

export async function generateStaticParams() {
  const allIceCreamDetails = await readDetailsOfAllFlavors();
  return allIceCreamDetails.map((icecream) => ({
    category: icecream.category,
    subCategory: icecream.subCategory
  }));
}
