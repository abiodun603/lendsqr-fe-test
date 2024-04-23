'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuLink = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`h-[40px] w-full flex items-center  pl-5   my-[5px]  hover:bg-[#F3FCFC] ${
        pathname === item.path && 'bg-[#000000] border border-l-[3px] border-transparent border-l-primary'
      }`}
    >
       {/* <span className={`text-lg ${pathname === item.path ? 'text-p800 ' : 'text-n900'}`}> */}
        <Image
          src={pathname === item.path ? item.imageActive : item.image }
          alt='icon'
          height={38}
          width={38}
          className={`h-auto w-auto`}          
        />
      {/* </span> */}
      <p className={`${pathname === item.path ? 'text-[16px] font-normal text-b200' : 'text-[16px] font-normal text-b200'}`}>{item.title}</p>
    </Link>
  );
};

export default MenuLink;
