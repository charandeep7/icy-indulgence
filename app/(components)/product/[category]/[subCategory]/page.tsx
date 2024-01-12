import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import v1 from "@/public/vanilla/classic-vanilla.jpg";
import Link from "next/link";
import { Button } from "@nextui-org/button";

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

export default function SubCategory({
  params: { category, subCategory },
}: Params) {
  const productCategory = category.split("%20").join(" ");
  const productSubCategory = subCategory.split("%20").join(" ");

  return (
    <div className="flex flex-col gap-4 items-center md:gap-0 md:flex-row p-4 justify-evenly">
      <div className="shadow-md dark:shadow-gray-300 p-4 rounded-sm">
        <Image
          as={NextImage}
          src={v1.src}
          height={400}
          width={400}
          alt="vanilla"
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
                <span className="ml-2 text-base text-default-500">{`₹305.50`}</span>
            </h2>
        </div>
        {/* Key Characteristics */}
        <ol className="space-y-4">
          <li>
            <strong>Flavor:</strong> Vanilla ice cream has a distinct and pure
            vanilla flavor. The use of high-quality vanilla extract or vanilla
            beans contributes to its authentic taste.
          </li>
          <li>
            <strong>Texture:</strong> It boasts a creamy and luscious texture,
            making it a delightful dessert to enjoy on its own or as a
            complement to various desserts and treats.
          </li>
          <li>
            <strong>Versatility:</strong> Classic vanilla ice cream serves as a
            versatile base for countless desserts. It can be paired with pies,
            cakes, fruit, or enjoyed in a cone or bowl.
          </li>
        </ol>

        {/* Conclusion */}
        <p className="TextAlignLast">
          Whether enjoyed on its own or as part of a more elaborate dessert,
          classic vanilla ice cream remains a delightful and timeless favorite
          for ice cream enthusiasts of all ages.
        </p>

        {/* Buttons for more actions, you can replace the href with the actual URLs */}
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-2">
          <div className="flex w-1/2 items-center justify-center">
            <Button
              className="bg-gray-400 dark:bg-gray-500 p-2 text-2xl rounded-r-sm"
              size="md"
              as={Link}
              href={"#"} // Replace with the actual URL
            >
              +
            </Button>
            <Button
              className="bg-gray-400 dark:bg-gray-500 p-2 text-2xl rounded-l-sm"
              size="md"
              as={Link}
              href={"#"} // Replace with the actual URL
            >
              -
            </Button>
          </div>
          <Button
            className="bg-[#4CAF50] w-1/2 p-2 text-xl"
            size="md"
            as={Link}
            href={"#"} // Replace with the actual URL
          >
            View Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
