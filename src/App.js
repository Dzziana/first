import { useState } from "react";
import { Button } from "./components/button.jsx";

import MyBtn from './components/button.jsx'
function App() {

  const [count,setCount] = useState(5)
  console.log(count);
  let k =["diana","ziiadust"]

  
  let a= 5
  console.log(a);
  return (
    <div className="App">
      <MyBtn count={count} setCount={setCount} veriable={a}/>
      {count}
      <Button count={count} setCount={setCount} />
      {a}
      <br></br>
     
    {/* <button onClick={()=> a=a+1}>increase</button> */}
    {/* <button onClick={()=> setcount(count + 1)}>increase</button>
    {count}
    <button onClick={()=> setcount(count - 1)}>decrease</button> */}


    
      
     
    </div>
  );
}

export default App;
