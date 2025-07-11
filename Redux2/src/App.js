
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const[amount,setAmount]=useState(0)
  const count = useSelector((state)=>(state.counter.value));
  const dispatch=useDispatch()



 function handelIncrementClick(){
    dispatch(increment());

 }

 function  handelDecrementClick(){
  dispatch(decrement());

 }

 function handelResetClick(){
  dispatch(reset());

 }
  function handelIncAmount(){
  dispatch(incrementByAmount(amount))

 }

  return (
   <>
   <div className='App'>

   <button onClick={handelIncrementClick}>+</button>

   <p> Count : {count} </p>

   <button onClick={handelDecrementClick}>-</button>
   <br/><br/>

   <button onClick={handelResetClick}> Reset </button>


 <br/><br/>
   <input 
   type='number'
   value={amount}
   placeholder='Enter Amount'
   onChange={(e)=>setAmount(e.target.value)} > 
   </input>
   
   <br/><br/>

<button onClick={handelIncAmount}> Inc By Amout</button>

   </div>
   </>
  );
}

export default App;
