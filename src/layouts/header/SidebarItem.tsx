"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { SidebarItem as SidebarItemType } from "./types";

interface Item {
  id: number;
  name: string;
  linkAddress: string;
  icon: any;
  isActive: boolean;
}

const SidebarItem = ({ item }: { item: Item }) => {
  const pathName = usePathname();

  // بررسی اینکه آیا آدرس فعلی با linkAddress برابر است یا خیر
  const isActive = pathName === item.linkAddress;

  return (
    <li className="flex justify-center items-center flex-col gap-x-2 gap-y-1 group  transition-all ease-linear">
      <div>{item.icon}</div>
      <Link
        className={`transition-all ease-linear text-[15px] ${
          isActive ? "text-cyan-600 font-bold" : "text-gray-600"
        } group-hover:text-cyan-700`}
        href={item.linkAddress}
      >
        {item.name}
      </Link>
    </li>
  );
};

export default SidebarItem;
