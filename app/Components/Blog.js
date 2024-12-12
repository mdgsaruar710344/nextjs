import Link from 'next/link';
import React from 'react';

function Blog({blog}) {
  const {id,title,description}=blog;
  return (
    <div className='m-4 p-4'>
      Title: {title};
      <br></br>
      <Link href={`/blogs/${id}`}>
          <button className='bg-blue-600 btn-primary rounded p-2 m-2'>
            Go to {title}
          </button>
      </Link>
    
       ID: {id}
    </div>
  );
}

export default Blog;