'use client'

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

// ** Images
import { Assets } from '@/assets'

// ** Icons
import { ChevronDown } from 'lucide-react';

// ./
import MenuLink from "./menuLink/menuLink";

// ** Utils
import { cn } from "@/lib/utils";

// ** Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




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
      <ul className={`list-none mt-24`}>
        <li className="flex items-center pl-5 space-x-3">
          <Image 
            src={Assets.dBrief}
            alt="brief icon"
            width={38}
            height={38}
            className="w-auto h-auto"
          />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center space-x-1">
                <span className="text-[16px] font-medium text-n500 capitalize">Switch organization</span>
                <ChevronDown className="text-200" size={15}/>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Google</DropdownMenuItem>
              <DropdownMenuItem>Microsoft</DropdownMenuItem>
              <DropdownMenuItem>Teams</DropdownMenuItem>
              <DropdownMenuItem>Uber</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
         
        </li>
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