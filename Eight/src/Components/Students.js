import React, { useContext, useState } from 'react'
import Subject from './Subject'
import { nameContext } from './Context_2';


export default function Students() {


   const name = useContext(nameContext)

  return (
    
    <div style={{backgroundColor:"orange",padding:10}}>

   
      
    
     <h4> Students Component.</h4>

 <nameContext.Provider value="Mrunali"> 

<h4> My Name is : {name}</h4>

 </nameContext.Provider>


             <Subject/>

   

      
      
    </div>
  )
}
