"use client";

import sidebar from "@/data/sidebar/sidebar";
import { Button } from "@mui/material";
import {
  RiSearch2Line,
  RiShoppingCartFill,
  RiShoppingCartLine,
} from "@remixicon/react";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <header className="flex justify-around items-center  bg-[whiteSmok] relative">
        <div className="flex justify-around items-center container mx-auto z-10 h-[140px]">
          <div className="flex justify-center items-center gap-x-8">
            <div>
              <Image
                alt=""
                src="/images/header/Logo.png"
                width={120}
                height={50}
              />
            </div>
            <ul className="flex justify-center items-center gap-x-5 ">
              {sidebar?.map((items) =>
                items.items.map((item) => <SidebarItem item={item} />)
              )}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <div className="border-[1px] border-[#810D07] rounded-[5px] p-2">
              <RiSearch2Line size={30} color="#810D07" />
            </div>
            <div className="bg-[#810D07] rounded-[10px]">
              <Button
                sx={{
                  // "&:hover": {
                  //   backgroundColor: "secondary.main", // رنگ جدید در حالت هاور
                  // },
                  fontSize: "18px", // اندازه فونت نرمال
                  color: "white",
                  paddingBlock: "10px",
                  paddingInline: "35px",
                  // borderRadius:"10px"
                }}
                className="text-gray-600"
              >
                محمد کاظم زاده
              </Button>
            </div>
            {/* <MuiButtons.Primary>پروفایل</MuiButtons.Primary> */}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-[530px] h-[60vh] bg-[#A90E06]"></div>

        {/* <div className="absolute top-0 right-0 w-[9000px] h-[200px] bg-red-500"></div> */}
      </header>
      <div className="flex justify-around items-center relative">
        <div className="lg:w-[25%] w-[50%] flex flex-col justify-center   items-start gap-y-4">
          <p className="text-[#4f7c7c] text-[14px] font-bold">سفارش میپذیریم</p>
          <h2 className="font-bold text-[#262525] text-[34px] ">تجربه غذایی لذیذ و به یادماندنی</h2>
          <p className="w-full">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از
          </p>
          <div className="flex w-full justify-end items-center">
            <Button sx={{fontSize:"16px",fontWeight:"800"}} variant="contained"  className="bg-red-200" >اطلاعات رستوران</Button>
          </div>
        </div>
        <div className="w-[50%] flex justify-end">
          <Image
            alt=""
            src="/images/header/burgerHeader.png"
            width={671}
            height={416}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
