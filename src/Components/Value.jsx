import React from 'react'
import { useSelector } from 'react-redux'

const Value = () => {
   const {counterValue} =  useSelector(store => store.counter)
   
  return (
    <div>
      <h4> Value: <b>{counterValue}</b></h4> 
    </div>
  )
}

export default Value