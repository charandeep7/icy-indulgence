import { readFlavors } from "@/app/api/prisma/readFlavors";
import IceCreamCard from "./IcecreamCard";

export default async function ProductList() {
  const flavorsData = await readFlavors();
  if (!flavorsData) {
    return (
      <div className="flex justify-center items-center">
        <h1>Oops! Something went wrong...</h1>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-light ml-4">
        Dreaming of delicious{" "}
        <span className="uppercase bg-red-400 p-2 font-semibold rounded">
          ice cream ?
        </span>
      </h1>
      {flavorsData && (
        <>
          <IceCreamCard flavor="Classy" list={flavorsData.Classy} />
          <IceCreamCard
            flavor="Nutty Delights"
            list={flavorsData.NuttyDelights}
          />
          <IceCreamCard
            flavor="Unique and Fun"
            list={flavorsData.UniqueAndFun}
          />
          <IceCreamCard
            flavor="International Flavors"
            list={flavorsData.InternationalFlavors}
          />
        </>
      )}
    </div>
  );
}
