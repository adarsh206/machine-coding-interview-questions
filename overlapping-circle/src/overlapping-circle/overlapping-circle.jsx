import React, { useEffect, useState } from 'react'
import "./style.css";

const OverlappingCircle  = () => {

  const [circles, setCircles] = useState([]);


  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick)
    }
  }, [])

  function handleDocumentClick(event) {
    const x = event.clientX;
    const y = event.clientY;

    const newCircles = {x, y};

    const oldCircles = [...circles];
    oldCircles.push(newCircles);

    setCircles(oldCircles);
  }


  return (
    <div className='circle'>
       {
        circles.map((coord, index) => {
          return <Circle key={index} x={coord.x} y={coord.y} />
        })
       }  
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