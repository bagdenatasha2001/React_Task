
import { useCallback, useState } from 'react';
import './App.css';

import ChildA from './Components/ChildA';
import ChildB from './Components/ChildB';
import Counter from './Components/Counter';


function App() {


  const [Increase, setIncrease]= useState(0);

  const [more, setMore]= useState(1);


       
const test= useCallback(()=>{

},[more])
 


  const[count,setCount]=useState(0);
   const [add,setAdd] = useState(1)

  
 
  const learning = useCallback(()=>{

  },[add])
  
  
return (
  <> 
  
   
   <ChildB test={test} />

    <h5> value:{Increase}</h5>
   <button onClick={ ()=> setIncrease(Increase+1)}> <h5>Increase</h5></button>

   <br/><br/>

   <h5> Child  updated :{more}</h5>

   <button onClick={()=>setMore(more+1)} ><h5>Click Me ! </h5> </button>
 

  
   <div>
  <h5> Count: {count}</h5>
  </div>

  <br/>

  <br/>


<ChildA learning={learning}/>
<div>
  <button onClick={()=>setCount(count+1)}><h5>Addition</h5> </button>

  <br/><br/>

 <h5>{ add}</h5>
  <button onClick={()=> setAdd(add+1)}> <h5>Console Count</h5></button>
</div>

<Counter/>

</>



)
  }
export default App;
