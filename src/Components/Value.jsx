import React from 'react'
import { useSelector } from 'react-redux'

const Value = () => {
   const counter =  useSelector(store => store.counter)
  return (
    <div>
      <h4> Value: <b>{counter}</b></h4> 
    </div>
  )
}

export default Value