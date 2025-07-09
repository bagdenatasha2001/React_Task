import React from 'react'
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <div>
      <h2>This is About Component.</h2>

       <li> <Link to ='/user/natasha'> Natasha </Link></li>
       
       <li> <Link to ='/user/mrunali'> Mrunali </Link></li>


    </div>
  )
}
