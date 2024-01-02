import IceCreamCard from "./IcecreamCard";
import { Classy, Nutty } from "@/lib/constant";

export default function ProductList() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-light ml-4">
        Dreaming of delicious{" "}
        <span className="uppercase bg-red-400 p-2 font-semibold rounded">
          ice cream ?
        </span>
      </h1>
      <IceCreamCard flavor="Classy" list={Classy} />
      <IceCreamCard flavor="Nutty Delights" list={Nutty} />
      <IceCreamCard flavor="Unique and Fun" list={Classy} />
      <IceCreamCard flavor="International Flavors" list={Nutty} /> 
    </div>
  );
}
