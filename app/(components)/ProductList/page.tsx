import { readFlavors } from "@/app/api/prisma/readFlavors";
import IceCreamCard from "./IcecreamCard";
import {
  Classy,
  Nutty,
  InternationalFlavors,
  UniqueAndFun,
} from "@/lib/constant";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default async function ProductList() {
  const flavorsData = await readFlavors();
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-light ml-4">
        Dreaming of delicious{" "}
        <span className="uppercase bg-red-400 p-2 font-semibold rounded">
          ice cream ?
        </span>
      </h1>
      {/* <IceCreamCard flavor="Classy" list={Classy} />
      <IceCreamCard flavor="Nutty Delights" list={Nutty} />
      <IceCreamCard flavor="Unique and Fun" list={UniqueAndFun} />
      <IceCreamCard flavor="International Flavors" list={InternationalFlavors} />  */}
      <Suspense fallback={<Loading />}>
        <IceCreamCard flavor="Classy" list={flavorsData?.Classy || []} />
        <IceCreamCard
          flavor="Nutty Delights"
          list={flavorsData?.NuttyDelights || []}
        />
        <IceCreamCard
          flavor="Unique and Fun"
          list={flavorsData?.UniqueAndFun || []}
        />
        <IceCreamCard
          flavor="International Flavors"
          list={flavorsData?.InternationalFlavors || []}
        />
      </Suspense>
    </div>
  );
}
