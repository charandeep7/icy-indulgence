import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export default function IceCreamCard({
  flavor,
  list,
}: {
  flavor: string;
  list: {
    id: number;
    type: string;
    title: string;
    img: string;
    alt: string;
    price: number;
  }[];
}) {
  return (
    <div>
      <h2 className="ml-4 font-semibold text-2xl mb-2">{flavor}</h2>
      <div className="gap-5 pl-2 pr-2 flex overflow-x-auto">
        {list.map(({ id, type, title, img, alt, price }, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            as={Link}
            href={`/product/${title}`}
            className="flex-shrink-0 mb-2 mt-2"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={alt}
                className="w-[200px] object-cover h-[200px]"
                src={img}
                isZoomed
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{title}</b>
              <p className="text-default-500">₹{price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
