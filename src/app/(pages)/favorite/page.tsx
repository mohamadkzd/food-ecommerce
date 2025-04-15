"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

interface ItemT {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
const FavoritePage = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["fakeData"],
    queryFn: () => {
      return fetch("https://fakestoreapi.com/products").then((res) =>
        res.json()
      );
    },
  });
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {data.map((item: ItemT) => (
          <div className="flex flex-col justify-center p-2 w-[45%] border-[1px] border-gray-400 rounded-2xl transition-all ease-linear hover:bg-gray-200 cursor-pointer">
            {/* <Image alt="" src={item.image} width={200} height={200}/> */}
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
