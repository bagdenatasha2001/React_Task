import React,{useRef} from 'react'

export default function Manipulation() {

    let box = useRef("")

     function background(){

        box.current.style.backgroundColor="blue";
      
     }


  return (
    <div>
      
      <div ref={box}  className='box-1'> This is a div </div>
      <br></br>

      <button className="box-btn" onClick={background}> Click me !</button>
    </div>
  )
}
