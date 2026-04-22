import React from 'react'
import "./style.css";

const OverlappingCircle  = () => {
  return (
    <div className='circle'>
        <Circle />
    </div>
  )
}

function Circle() {
    return <div className='circle-comp'/>
}

export default OverlappingCircle