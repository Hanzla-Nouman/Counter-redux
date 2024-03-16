import React from 'react'
import { useSelector } from 'react-redux'

const Value = () => {
   const {counterVal} =  useSelector(store => store.counter)
  return (
    <div>
      <h4> Value: <b>{counterVal}</b></h4> 
    </div>
  )
}

export default Value