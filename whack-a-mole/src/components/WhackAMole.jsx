import Cell from "./Cell"


const WhackAMole = ({ size }) => {
  return (
    <div>
        {Array.from({ length: size }).map((value, row) => {
            return (
                <div className="row" key={row}>
                    {Array.from({ length: size }).map((_, col) => {
                        return <Cell key={`${row}, ${col}`} />
                    })}
                </div>
        )})}
    </div>
  )
}

export default WhackAMole