import { Divider } from "@nextui-org/divider";
import v1 from "@/public/vanilla/v1.jpg";
import Card from "./Card";

const images = [v1, v1, v1, v1, v1, v1, v1, v1, v1, v1, v1, v1, v1, v1];
type Params = {
  params: {
    category: string;
    price: string
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
  const subtype = 'Classic Vanilla', price = "₹500.104"
  return (
    <div className="relative">
      <div className="sticky top-16 z-20 backdrop-blur-sm">
        <h1 className="font-semibold text-3xl p-4">{productCategory}</h1>
        <Divider />
      </div>
      <div className="-z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {
          images.map((image,id) => (
            <Card key={id.toString()} subtype={subtype} price={price} more={`/product/${category}/${subtype}`} />
          ))
        }
      </div>
    </div>
  );
}
