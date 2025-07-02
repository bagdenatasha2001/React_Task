import React from 'react'

export default function Todoitems(props) {
  return (
   <li className='Todo-items'>
    <span>
    <input  type='checkbox'/>
    <span className='item-text'>{props.text}</span>
    </span>
    <p>...</p>
   </li>
  )
}
