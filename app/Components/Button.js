"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

function Button({path,children}) {
  // throw new Error('Error from button component');
 const router= useRouter();
  const handleClick=()=>{
    router.push(path)
  }
  return (
    <div className='m-4'>
        <button onClick={handleClick} className="bg-blue-400 rounded">{children} </button>
    </div>
  );
}

export default Button;