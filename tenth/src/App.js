import './App.css';
import {useState ,useEffect } from 'react';
import {getPost } from './api';
import PostCards from './Components/PostCards';
import CommentCard from './Components/CommentCard';
import { getComments } from './api/commentApi';

function App() {

  const[data,setdata]= useState(null)

  useEffect(()=>{
    getPost().then((posts)=>setdata(posts));

  },[])


  


const [ info , setInfo]=useState(null)

useEffect(()=>{
  getComments().then((Comments)=>setInfo(Comments));
},[])


  return (
   <>
      {data?data.map((e)=><PostCards  id = {e.id} title={e.title} body={e.body} />): <h1> no data </h1>}
 

{
  
   info?info.map((e)=> <CommentCard name={e.name} email={e.email} />):<p> no data</p>
}



   </>
  )
}
export default App;


