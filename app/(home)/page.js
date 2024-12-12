
import Button from "../Components/Button";
import Button2 from "../Components/Button2";


export default function Home() {
  // throw new Error('error in app/page.js');
  return (
 <div>
  This is Home Page!
  <div>Another Div</div>
    <Button path="/settings">Go to Settings Page</Button>
    <Button path="/analytics">Go to Analytics Page</Button>
    <Button path="/dashboard">Go to Dashboard Page</Button>
    <Button path="/heavy">Go to Heavy Page</Button>

    <div>
      <Button2></Button2>
    </div>
 </div>
  );
}
