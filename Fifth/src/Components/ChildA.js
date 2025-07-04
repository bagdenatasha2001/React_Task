import React, {memo} from 'react'

 function ChildA(learning) {
  console.log("Child componet")
  return (
    <div>
      
    </div>
  )
}

export default memo(ChildA);