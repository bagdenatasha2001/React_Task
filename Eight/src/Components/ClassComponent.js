import React, { useState } from 'react'
import Students from './Students'
import { subjectContext } from './ContextData'

export default function ClassComponent() {

 const [ sub, setSub] = useState('English')

  return (
    <>
    <div style={{backgroundColor:"skyblue",padding:10}}>

    <subjectContext.Provider value={sub}>

      <h3>Class Component</h3> 
      
      <select Value={sub} onClick={(e)=>setSub(e.target.value)} >
            <option value="">Select subject </option>
            <option value=" English"> English</option>
            <option value=" Maths">  Maths</option>
            <option value="Hindi"> Hindi</option>
            <option value=" Science"> Science</option>
           
        </select>
       

        <button onClick={()=>setSub('')}> Reset Subject</button>
         <br/> <br/>
      <Students/>

      </subjectContext.Provider>

      
   
    </div>
    </>
  )
}
