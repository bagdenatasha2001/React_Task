import react , { memo } from "react"


 function ChildB(test) {

    console.log("Child is updated  when the child updated button is press...")
  return (
    <div>

        
      
    </div>
  )
}

export default memo(ChildB);