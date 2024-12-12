 "use client";
 import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function CustomLink({path,children}) {
 const pathname= usePathname();
const activePath=path==pathname;
 
  return (
    <div className={activePath? 'text-green-600' :''}>
      <Link href={path}>{children}</Link>
    </div>
  );
}

export default CustomLink;