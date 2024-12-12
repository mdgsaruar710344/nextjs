import React from 'react';
import blogs from "@/app/data/data";

export function generateStaticParams(){
  return blogs.map(blog=>({
    id: `${blog.id}`,
  }))
}

function page({params}) {
  // console.log(params.id);
  const {id}=params;
  // console.log(blogs.length);
  const blog =blogs.find(blog=>blog.id==id);
  const {title, description}=blog;
  return (
    <div>
      This is blog details..
      <br></br>
      Description: {description}
      <br></br>


    </div>
  );
}

export default page;