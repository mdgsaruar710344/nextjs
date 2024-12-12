import React from 'react';
import blogs from '../../data/data.json';
import Blog from '@/app/Components/Blog';

 function Blogs() {


  return (
    <div>
      All Blogs are here...
      <br></br>
      Total blogs:
        {blogs.length}
        <br></br>
        Titles:
        <div className='m-4 p-4'>

      
        {blogs.map(blog=> <Blog key={blog.id} blog={blog}> </Blog> )}
        </div>
    </div>
  );
}

export default Blogs;