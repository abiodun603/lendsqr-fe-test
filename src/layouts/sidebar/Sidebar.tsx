'use client'

import Image from "next/image";

// ** Images
import { Assets } from '@/assets'

// ./
import MenuLink from "./menuLink/menuLink";

// ** Utils
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";




const menuItems = [
  {
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        image: Assets.home,
        imageActive: Assets.home
      },
    ],
  },
  {
    title: "Customers",
    list: [
      {
        title: "Users",
        path: "/dashboard/users",
        image: Assets.dUsers,
        imageActive: Assets.dUsers
      }
    ],
  },
];

interface SidebarProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Sidebar =  ({ setIsSidebarOpen }: SidebarProps) => {
  return (
    <div className={cn("sticky top-10 h-[100dvh]")}>
       
      <div className="flex items-center gap-[20px] mb-14 " >
        <Image
          src="/logo.svg"
          alt=""
          width="200"
          height="50"
          className=""
        />
      </div>
      <ul className={`list-none`}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-xs font-medium text-n500 pl-6 uppercase">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} setIsSidebarOpen={setIsSidebarOpen}/>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;