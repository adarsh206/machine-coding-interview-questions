import { useState } from "react"
import { generateMolePosition } from "../utils/moleUtils";


const Cell = ({ molePos, row, col, setScore, setMolePos, size }) => {

  const [hammerFlag, setHammerFlag] = useState(false);

  const handleClick = () => {
    setHammerFlag(true);
    if(row === molePos[0] && col === molePos[1]){
      setScore((prev) => prev + 10);
      setTimeout(() => {
        setMolePos(generateMolePosition(size))
      }, 100)
      
    }
    setTimeout(() => {
      setHammerFlag(false);
    }, 200)
  }

  return (
    <div className="cell" onClick={handleClick}>
        {
            row === molePos[0] && col === molePos[1] && '☠️'
        }
        {
            hammerFlag && <div className="hammer">🔨</div>
        }
    </div>
  )
}

export default Cell