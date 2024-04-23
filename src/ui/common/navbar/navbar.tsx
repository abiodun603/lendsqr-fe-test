"use client";

import { usePathname } from "next/navigation";
import Image from 'next/image'
import { FC } from "react";

// ** Icons
import { Eye, Bell} from "lucide-react";
// import { FaAngleLeft , FaAngleRight} from "react-icons/fa6";

// ** Third Party

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: FC<NavbarProps> = ({isSidebarOpen, toggleSidebar}) => {
  const pathname = usePathname();

  // styles
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";


  return (
    <div className="h-[85px] flex items-center justify-between px-5 bg-white border-b-[0.5px] border-n400 z-50">
      {/* {
        !isSidebarOpen ?
        <div className='absolute flex items-center justify-center -left-[10px] top-8 w-5 h-5 rounded-full bg-p900 z-50'>
          <FaAngleLeft color='#FFFFFF' onClick={toggleSidebar}/>
        </div>:
        <div className='absolute flex items-center justify-center -left-[10px] top-8 w-5 h-5 rounded-full bg-p900 z-50'>
          <FaAngleRight color='#FFFFFF' onClick={toggleSidebar}/>
        </div>
      } */}
      <div>
        <div className="hidden lg:inline text-n900 text-2xl font-semibold capitalize">{pathname.split("/").pop()}</div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          <div>
            <div className="flex items-center justify-center space-x-2 bg-y100 px-2 py-1 rounded-2xl">
              {/* dot */}
              <div className="bg-y500 w-[6px] h-[6px] rounded-full" />
              <p className="text-y900 text-xs font-medium">Test mode</p>
            </div>
          </div>
          {/* <MdOutlineChat size={20} /> */}
          <Eye color='#110D0C' size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;