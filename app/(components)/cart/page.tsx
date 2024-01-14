import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { RiSecurePaymentLine } from "react-icons/ri";

interface CardProps  {
  id: number,
  title: string,
  price: number,
  quantity: number,
  img: string,
  alt: string
}

const Card = ({ id, title, price, quantity,img, alt,  }: CardProps) => {
return (
  <>
  <div className="flex justify-around gap-2 p-4">
    <div className="w-1/2 sm:w-1/3">
      <Image src={img} alt={alt} width={200} height={200} isBlurred />
    </div>
    <div className="w-1/2 sm:w-2/3 flex flex-col gap-2 justify-around">
      <div className="">
        <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
        <p className="text-lg sm:text-xl text-default-500">₹{price}</p>
        <p>Total: {quantity}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Button>Increase</Button>
        <Button>Decrease</Button>
      </div>
    </div>
  </div>
  </>
);
};

export default function page() {
  const item = {
    id: 1,
    title: "Classic Vanilla",
    price: 258.15,
    quantity: 10,
    img: "/vanilla/french-vanilla.png",
    alt: "image"
  };
  const items = [item,item,item,item,item,item,item,item,item,item,item,item,item,item,item,item,item,item]
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-x-1 divide-y-1 dark:divide-slate-800 border border-b-1 dark:border-slate-800">
        {
          items.map(({ id, title, price, quantity, img, alt},index) => (
            <Card key={index} id={id} title={title} price={price} quantity={quantity} img={img} alt={alt} />
        ))
        }
      </div>
      <div>
        <Button className="fixed bottom-5 right-5 p-6 bg-green-500" endContent={<RiSecurePaymentLine />}>
          Checkout
        </Button>
      </div>
    </div>
  );
}
