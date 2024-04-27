'use client'

import Image from "next/image";

// ** Images
import { Assets } from '@/assets'

// icons
import { FaAngleLeft } from 'react-icons/fa';

// ./
import MenuLink from "./menuLink/menuLink";




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
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar =  ({isSidebarOpen, toggleSidebar}: SidebarProps) => {
  return (
    <div className="sticky top-10 h-[100dvh]">
       
      <div className="flex items-center gap-[20px] mb-14 " >
        <Image
          src="/logo.svg"
          alt=""
          width="200"
          height="50"
          className=""
        />
        {
          !isSidebarOpen && <div className='absolute flex items-center justify-center -right-8 top-2.5 w-5 h-5 rounded-full bg-p900 z-50' onClick={toggleSidebar}>
            <FaAngleLeft color='#FFFFFF'/>
          </div>
        }
      </div>
      <ul className={`list-none`}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-xs font-medium text-n500 pl-6 uppercase">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;