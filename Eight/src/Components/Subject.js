import React, { useContext } from 'react'
import { subjectContext } from './ContextData'



export default function Subject() {
    const subject = useContext(subjectContext)


  return (
<>
    <div style={{backgroundColor:"pink",padding:10}}>
      
     <h4> Subject is : {subject}</h4>
    </div>

    </>
  )
}
