
import React, {useState} from 'react'


export default function Color() {

  const[color, setcolor] = useState("red")

  const[count ,setcount] = useState(15)


  return (
  <>

      <p> My favorite color is - {color}</p>

     <button type='button' onClick={()=> setcolor("green")} > click me</button>

     
    <button type='button' onClick={()=> setcolor("pink")} > click me</button>


    <button type='button' onClick={()=> setcolor("orange")} > click me</button>






      
      <h3> Initial counte is -{count}</h3>

      

      <button type='button' onClick={()=>setcount(count+1)}> Increase</button>


      <button type='button'  onClick={()=> setcount(count - 1)}> decrease </button>
      
   </>
  )
}

