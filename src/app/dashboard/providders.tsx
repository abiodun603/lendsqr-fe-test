'use client'

import {ReactNode,  useEffect, useState } from "react";

// ** UI
import Sidebar from "@/ui/common/sidebar/Sidebar";
import Navbar from "@/ui/common/navbar/navbar";


const Providers = ({children}: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize();

    // Attach resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="flex w-full h-full bg-white">
      <div className={`bg-white w-[17.6rem] min-h-screen fixed left-0 top-0 transform ${isSidebarOpen ? '' : '-translate-x-full'}`}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className={`w-full  ${isSidebarOpen ? "lg:pl-[270px]" : "lg:p-0"} `}>
        <div className=" fixed top-0 w-[calc(100vw-270px)]  z-50">
          {/* <Navbar isSidebarOpen = {isSidebarOpen} toggleSidebar={toggleSidebar}/> */}
        </div>
        <div className="w-full bg-[#FBFBFB] min-h-screen">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Providers