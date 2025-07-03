import React,{useState,useEffect} from 'react'

export default function Timer() {

    const[Time, setTime]=useState(0);


    useEffect(()=>{

        const time = setTimeout(()=>setTime(Time+1),1000);
    },[Time])




    // const[time , settime]= useState(0);


    // useEffect(()=>{

    //    const time = setTimeout(()=>settime(time+1),1000);
    // },[time])

  return (
    <div>
        <p>Stopwatch</p>
        <h5>Current Time is :{Time} </h5>
      
    </div>
  )
}
