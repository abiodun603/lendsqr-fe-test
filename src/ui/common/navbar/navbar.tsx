"use client";

import { FC } from "react";
import Image from 'next/image'
import Link from "next/link";

// ** Avatar
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// ** Icons
import { Bell, UserRound } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SearchInput } from "@/components/ui/input";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: FC<NavbarProps> = ({isSidebarOpen, toggleSidebar}) => {
  

  return (
    <div className="h-[100px] flex items-center justify-between px-5 bg-white border-b-[0.5px] border-n400 z-50">
      <div className="w-[25rem]">
        <div className="flex items-center gap-[20px] w-[17.68rem]" >
          <Image
            src="/logo.svg"
            alt=""
            width="100"
            height="10"
            className="w-auto h-auto"
          />
        </div>
      </div>
      
      <div className="w-full flex items-center justify-between">
        <SearchInput placeholder="Search for anything" />
        <div className="flex items-center gap-5">
          <div className="flex items-center space-x-6">
            <Link target="_blank" href="https://lendsqr.com/" className='text-b200 text-[16px] underline mr-5'>Docs</Link>
            <Bell color='#110D0C' size={20} />

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={"/profile.png"}  />
                  <AvatarFallback><UserRound className=' text-n500'size={28}/></AvatarFallback>
                </Avatar>
                <div className="flex items-center">
                  {/* name dropdown*/}
                  <p className="text-[16px] font-medium text-b200">Admin</p>
                  <IoMdArrowDropdown />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuLabel>Logout</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;