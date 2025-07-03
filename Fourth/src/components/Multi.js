import React, { useMemo, useState } from 'react'

export default function Multi() {

    const[add, setAdd] = useState(0)
    const[sub, setSub] = useState(100)

    function Addition(){
        setAdd(add+1)
    }


     function Substraction(){
        setSub(sub-1)
    }


     const Answer = useMemo(function multiply(){
        
        console.log("######")

        return add*5;

    },[add])
    


  return (


    <div>

   <br></br>
   <br></br>
  
    <h4> Final Answer is  :  {Answer}</h4>                 
   <p>{add}</p>
   <button onClick={Addition}>Addition</button>


  <p>{sub}</p>
   <button onClick={Substraction}>Substraction</button>


<br></br>


    </div>
  )
}
