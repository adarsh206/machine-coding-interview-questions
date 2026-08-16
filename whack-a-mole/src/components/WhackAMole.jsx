import { useEffect } from "react"
import Cell from "./Cell"
import { useState } from "react"
import {generateMolePosition} from '../utils/moleUtils' 


const WhackAMole = ({ size, delay }) => {

    const [molePos, setMolePos] = useState(generateMolePosition(size));
    const [score, setScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMolePos(generateMolePosition(size));
        }, delay);

        return () => { 
            clearInterval(interval) 
        }
    },[])

  return (
    <>
        <h1>Score : {score}</h1>
        <div>
            {Array.from({ length: size }).map((value, row) => {
                return (
                    <div className="row" key={row}>
                        {Array.from({ length: size }).map((_, col) => {
                            return <Cell key={`${row}, ${col}`} molePos={molePos} row={row} col={col} setScore={setScore} setMolePos={setMolePos} size={size}/>
                        })}
                    </div>
            )})}
        </div>
    </>
   
  )
}

export default WhackAMole