
import React from 'react'

export default function PostCards(props) {
  return (
    <>
 <div className='post-container' >
     <div className='post-cards'>
        <h5>{props.id}</h5>
       <h3>{props.title}</h3>
       <p> {props.body}</p>

      
    </div>
    </div>
    </>
  )
}

