import React from 'react';
import CustomLink from './CustomLink';

function CommonComponent() {
  return (
    <div className='text-red-500 text-2xl'>
   <ul className='flex gap-4'>
    <li> <CustomLink path="/">Home</CustomLink> </li>
    <li> <CustomLink path="/dashboard">Dashboard</CustomLink> </li>
    <li> <CustomLink path="/settings">Settings</CustomLink> </li>
    <li> <CustomLink path="/analytics">Analytics</CustomLink> </li>
    <li> <CustomLink path="/heavy">Heavy</CustomLink> </li>
    <li> <CustomLink path="/blogs">Blogs</CustomLink> </li>
   </ul>
   <hr ></hr>
    </div>
  );
}

export default CommonComponent;