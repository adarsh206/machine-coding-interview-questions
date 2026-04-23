import React, { useEffect } from 'react'
import "./style.css";

const OverlappingCircle  = () => {

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick)
    }
  }, [])

  function handleDocumentClick(event) {
    const x = event.clientX;
    const y = event.clientY;
  }


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