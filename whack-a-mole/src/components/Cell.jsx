import { useState } from "react"


const Cell = ({ molePos, row, col }) => {

  const [hammerFlag, setHammerFlag] = useState(false);

  const handleClick = () => {
    setHammerFlag(true);
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