import { Divider } from "@nextui-org/react";

type Params = {
  params: {
    category: string;
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

export default async function Project({ params: { category } }: Params) {
  const name = category.split("%20").join(" ");
  return (
    <div className="relative">
      <div className="sticky top-16 z-10 backdrop-blur-sm">
        <h1 className="font-semibold text-3xl p-4 ">
          {name}
        </h1>
      </div>
      <Divider />
      <div className="">
        <p>
          kitish
        </p>
      </div>
    </div>
  );
}
