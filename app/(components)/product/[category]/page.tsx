import { Divider } from "@nextui-org/divider";
import Card from "./Card";
import { readSingleFlavor } from "@/app/api/prisma/readFlavors";
import { notFound } from "next/navigation";
type Params = {
  params: {
    category: string;
    price: string;
  };
};
export async function generateMetadata({ params: { category } }: Params) {
  const title = category.split("%20").join(" ");
  if (!title) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title,
  };
}

export default async function Category({ params: { category } }: Params) {
  const productCategory = category.split("%20").join(" ");
  const icecreams = await readSingleFlavor(productCategory);
  if (!icecreams) {
    notFound();
  }
  return (
    <div className="relative">
      <div className="sticky top-16 z-20 backdrop-blur-sm">
        <h1 className="font-semibold text-3xl p-4">{productCategory}</h1>
        <Divider />
      </div>
      <div className="-z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {icecreams.map(({ id, img, price, quantity, subtype }, index) => (
          <Card
            id={id}
            key={id.toString()}
            subtype={subtype}
            price={price}
            more={`/product/${category}/${subtype}`}
            img={img}
            quantity={quantity}
          />
        ))}
      </div>
    </div>
  );
}
