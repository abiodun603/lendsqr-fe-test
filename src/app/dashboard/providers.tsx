'use client'

import {ReactNode, useState } from "react";

// ** UI
import Sidebar from "@/layouts/sidebar/Sidebar";
import Navbar from "@/layouts/navbar/navbar";

// ** Utils
import { cn } from "@/lib/utils";


const Providers = ({children}: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex w-full h-full bg-white">
      <div className={cn(`bg-white w-[17.6rem] min-h-screen fixed left-0 top-0 transform`, {
        '-translate-x-full lg:translate-x-0' : !isSidebarOpen,
        'z-50': isSidebarOpen
      })}>
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
      </div>
      <div className=" fixed top-0 w-[100vw]  z-50">
        <Navbar isSidebarOpen = {isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      </div>
      <div className={cn(`w-full`,{
        'pl-[17.68rem]' : isSidebarOpen,
        " lg:pl-[17.68rem] p-0" : !isSidebarOpen
      } )}>
        <div className="w-full bg-[#FBFBFB] min-h-screen pt-32 pb-16 px-4 md:px-20">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Providers