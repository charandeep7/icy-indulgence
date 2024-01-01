"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function IceCreamCard({flavor, list}:{
    flavor: string,
    list: ClassyProps
}) {
  return (
    <div>
      <h2 className="ml-4 font-semibold text-2xl mb-2">{flavor}</h2>
      <div className="gap-5 pl-2 pr-2 flex overflow-x-auto">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
            className="flex-shrink-0 mb-2"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-[200px] object-cover h-[200px]"
                src={item.img}
                isZoomed
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
