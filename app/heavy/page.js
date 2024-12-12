import { Suspense } from "react";
import Posts from "../Components/Posts";


function Heavy() {
  return (
    <div className="m-4">
      This is heavy page.

      <div>
        <Suspense fallback={<span className="loading loading-bars loading-lg"></span>}>
            <Posts></Posts>
        </Suspense>
      </div>

    
    </div>
  );
}

export default Heavy;