import React, { useEffect, useState } from 'react'
import "./style.css";

const OverlappingCircle  = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);


  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick)
    }
  }, [])

  function handleDocumentClick(event) {
    const x = event.clientX;
    const y = event.clientY;

    setX(x);
    setY(y);
  }


  return (
    <div className='circle'>
       {!!x && !!y && <Circle x={x} y={y} />}   
    </div>
  )
}

function Circle({ x, y }) {
    return <div style={{ 
      left: `${x}px`, 
      top: `${y}px`, 
      transform: "translate(-100px, -100px)",
    }} className='circle-comp'/>
}

export default OverlappingCircle