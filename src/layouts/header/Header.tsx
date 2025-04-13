"use client";

import sidebar from "@/data/sidebar/sidebar";
import { Button, Input, TextField, ThemeProvider } from "@mui/material";
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
              {/* <Input/> */}
              {/* <ThemeProvider theme={Input} >
                <TextField label="Outlined" />
                <TextField label="Filled" variant="filled" />
                <TextField label="Standard" variant="standard" />
              </ThemeProvider> */}
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

        {/* <div className="absolute top-0 right-0 w-[9000px] h-[200px] bg-red-500"></div> */}
      </header>
    </div>
  );
};

export default Header;
