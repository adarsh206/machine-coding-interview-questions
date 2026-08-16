import { useEffect } from "react"
import Cell from "./Cell"
import { useState } from "react"
import {generateMolePosition} from '../utils/moleUtils' 


const WhackAMole = ({ size, delay }) => {

    const [molePos, setMolePos] = useState(generateMolePosition(size));
    console.log(molePos)

    useEffect(() => {
        const interval = setInterval(() => {
            setMolePos(generateMolePosition(size));
        }, delay);

        return () => { 
            clearInterval(interval) 
        }
    },[])
  return (
    <div>
        {Array.from({ length: size }).map((value, row) => {
            return (
                <div className="row" key={row}>
                    {Array.from({ length: size }).map((_, col) => {
                        return <Cell key={`${row}, ${col}`} molePos={molePos} row={row} col={col} />
                    })}
                </div>
        )})}
    </div>
  )
}

export default WhackAMole