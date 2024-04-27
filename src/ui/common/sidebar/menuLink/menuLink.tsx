'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuLink = ({ item }: any) => {
  const pathname = usePathname();
  const segments = pathname.split('/'); // Split the pathname into segments

  
  const sanitizedPathname = segments.length === 2 ? `/${segments[1]}` :  `/${segments[1]}/${segments[2]}`;

  console.log(sanitizedPathname)
  return (
    <Link
      href={item.path}
      className={`h-[40px] w-full flex items-center  pl-5   my-[5px] space-x-3 hover:bg-[#F3FCFC] ${
        sanitizedPathname === item.path && 'bg-[#F3FCFC] border border-l-[3px] border-transparent border-l-primary'
      }`}
    >
       {/* <span className={`text-lg ${pathname === item.path ? 'text-p800 ' : 'text-n900'}`}> */}
        <Image
          src={sanitizedPathname === item.path ? item.imageActive : item.image }
          alt='icon'
          height={38}
          width={38}
          className={`h-auto w-auto`}          
        />
      {/* </span> */}
      <p className={`${sanitizedPathname === item.path ? 'text-[16px] font-normal text-b200' : 'text-[16px] font-normal text-b200'}`}>{item.title}</p>
    </Link>
  );
};

export default MenuLink;
 