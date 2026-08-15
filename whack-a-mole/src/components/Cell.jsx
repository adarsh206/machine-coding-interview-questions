

const Cell = ({ molePos, row, col }) => {
  return (
    <div className="cell">
        {
            row === molePos[0] && col === molePos[1] && '☠️'
        }
    </div>
  )
}

export default Cell