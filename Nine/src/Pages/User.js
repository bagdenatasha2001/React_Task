import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const Params= useParams()
    const {name} = Params
      return (
    <div>
      <h2>This is {name}'s   Page.</h2>
    </div>
  )
}
