import React, { useReducer } from 'react'


const initialstate=0;

const reducer=(state, action)=>{
    switch(action){
        case "Increment":
            return state+1
        case "decrement":
            return state-1
        default:
            return state;      
    }

}
export default function Counter() {


 const[count,dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
        <h3> value :{count}</h3>

        <button onClick={()=>dispatch("Increment")}> <h3> Increment</h3></button>

        <br/> < br/>


        <button onClick={()=>dispatch("decrement")}> <h3> decrement</h3></button>

    </div>
  )
}
