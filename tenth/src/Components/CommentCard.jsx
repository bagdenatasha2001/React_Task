import React from 'react'

export default function CommentCard(props) {
  return (
    <div>
     <h5> Name:{props.name}</h5>
     <h5> Email:{props.email}</h5>
      
    </div>
  )
}
