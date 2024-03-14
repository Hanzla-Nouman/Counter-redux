import React from 'react'
import { useDispatch } from 'react-redux'

const Controls = () => {
   const dispatch =  useDispatch();
   const handleInc = () => dispatch({type:"+"})
   const handleDec = () => dispatch({type:"-"})
  return (
    <>
    <div>
    <button className="btn-success btn btn-sm px-4 m-1" onClick={handleInc}>+</button>
    <button className="btn-danger btn btn-sm px-4 m-1"onClick={handleDec}>-</button>
    </div>
    </>
  )
}

export default Controls