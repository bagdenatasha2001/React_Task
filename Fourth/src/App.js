import logo from './logo.svg';
import './App.css';
import Color from './components/Color.js';
import Mycompo from './components/Mycompo.js';
import { useEffect,useState,useRef } from 'react';
import Timer from './components/Timer.js';
import Input from './components/Input.js';
import Manipulation from './components/Manipulation.js';
import Multi from './components/Multi.js';



function App() {


  const refElemnet= useRef("");
  const[isVisiable, setisVisiable] = useState(true)
  const [Name , setName]= useState("Natasha");

  useEffect(()=>{
    console.log("App is mounting...")
  },[])


    
console.log(refElemnet)


 function Reset(){
  setName("")
  
  refElemnet.current.focus()

}


 function handleInput(){

  refElemnet.current.style.backgroundColor="pink"
 
  
}

let btnref= useRef(0)

function colorchange(){
  
  btnref.current.style.backgroundColor="red";

}

  return (
   <div>

  <input ref={refElemnet} type='text' value={Name}  onChange={(e)=> setName(e.target.value)}/> 

  <button onClick={Reset}>Reset</button>

  <button onClick={handleInput}> Handle Input</button>

 <Color/> 
 <Mycompo/>
 <Timer/>



 {isVisiable?<Mycompo/> :<></>}

 <button onClick={()=>setisVisiable(!isVisiable)}> Toggle</button>

 <br></br>

 <button ref={btnref}> Change color</button>
 <br></br>
 <button  onClick={colorchange}> click me !</button>
   



   <Manipulation/>

    <Multi/>
    </div>
  );
}

export default App;
