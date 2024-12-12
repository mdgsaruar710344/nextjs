const posts= async ()=>{
  await new Promise(resolve=>{
    setTimeout(()=>{
        resolve();
    },5000);
  });
 return <span>All Posts are here.</span>
}

async function  Posts() {
const allPosts= await posts();
  return (
    <div>
         {allPosts}
    </div>
  );
}

export default Posts;
