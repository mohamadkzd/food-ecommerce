import { Button } from "@mui/material";
import Image from "next/image";

const BottomHeader = () => {
    return ( 
        <>
             <div className="absolute top-0 left-0 w-[30%] h-[65vh] bg-[#A90E06] rounded-br-4xl"></div>
      <div className="flex justify-between items-center relative">
        <div className="lg:w-[28%] w-[50%] flex flex-col justify-center   items-start gap-y-4">
          <p className="text-[#4f7c7c] text-[14px] font-bold">سفارش میپذیریم</p>
          <h2 className="font-bold text-[#262525] text-[34px] ">
            تجربه غذایی لذیذ و به یادماندنی
          </h2>
          <p className="w-full">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از
          </p>
          <div className="flex w-full justify-end items-center">
            <Button
              sx={{ fontSize: "16px", fontWeight: "800" }}
              variant="contained"
              className="bg-red-200"
            >
              اطلاعات رستوران
            </Button>
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
        </>
     );
}
 
export default BottomHeader;