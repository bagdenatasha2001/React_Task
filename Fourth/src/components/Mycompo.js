import React,{useEffect, useState} from 'react'

export default function Mycompo() {

    const[counter ,setcounter]=useState(0)

    useEffect(()=>{
    console.log("My component is mounting....," , counter)

    },[counter])

   


  return (
    <div>
      
     <p> counter is {counter}</p>


     <button type='button' onClick={()=>setcounter(counter+1)}> Update !</button>

    </div>
  )
}
