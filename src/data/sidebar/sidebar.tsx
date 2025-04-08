import { RiBasketballLine, RiHeartLine, RiHome2Fill, RiHome2Line, RiHome3Line, RiHome4Line, RiHome6Line, RiShoppingBasket2Line, RiShoppingBasketLine, RiVerifiedBadgeFill } from "@remixicon/react";
import { ReactNode } from "react";  

export interface SidebarItem {  
  id: number;  
  name: string;  
  linkAddress: string;  
  icon: ReactNode; // برای نشان دادن کامپوننت‌های React  
  isActive: boolean;  
}  

export interface Sidebar {  
  items: SidebarItem[];  
}  

const sidebar = [
  {
    items: [
      {
        id: 1,
        name: "خانه",
        linkAddress: "/",
        icon: <RiHome4Line />,
        isActive: true,
      },
      {
        id: 2,
        name: "سفارشات",
        linkAddress: "/menu",
        icon: <RiShoppingBasket2Line />,
        isActive: true,
      },
      {
        id: 3,
        name: "علاقه مندی ها",
        linkAddress: "/about",
        icon: <RiHeartLine />,
        isActive: true,
      },
      {
        id: 4,
        name: "تماس با ما",
        linkAddress: "/contact",
        icon: <RiShoppingBasketLine />,
        isActive: true,
      },
    ],
  },
];

export default sidebar;
