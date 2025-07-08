
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [twoDMatrix, setTwoDMatrix] = useState([]); // 100 cells
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);

  const prepareTwoDMatrix = () => {
    const matrix = [];

      for(let i = 0; i <= 9; i++){ // rows
        for(let j = 0; j <= 9; j++){ // columns
          const obj = {
            pos: [i, j],
            isColor: false
          }
          matrix.push(obj);
        }
      }
    setTwoDMatrix(matrix)
  }


  useEffect(() => {
    prepareTwoDMatrix()
  }, [])

  const handleDrag = (e, pos) => {
    console.log('OnDrag', pos)
    setStart(pos);
    prepareTwoDMatrix();
  }

  const handleOnDragOver = (e, pos) => {
    console.log('OnDragOver', pos)
    setEnd(pos);
  }


  const fillColor = (startPos, endPos) => {
    const [startRow, startCol] = startPos;
    const [endRow, endCol] = endPos;
    const selectedGrid = [];

    for(let i = startRow; i <= endRow; i++){ // sub matrix rows traverse
      for(let j = startCol; j <= endCol; j++){ // sub matrix cols traverse
        selectedGrid.push([i, j].join(''))
      }
    }
    let copyMat = [...twoDMatrix];
    copyMat = copyMat.map((item) => {
      const { pos } = item;
      const stringPos = pos.join('');
      if(selectedGrid.includes(stringPos)){
        item.isColor = true;
      }
      return item;
    })
    setTwoDMatrix(copyMat);
  }

  useEffect(() => {
    if(start.length > 1 && end.length > 1){
      fillColor(start, end)
    }
  }, [start, end])

  return (
 <div className='App'>
  <h1>Selectable Grid</h1>
  <div className="grid">
    <div className="board">
      {
        twoDMatrix?.map((item, i) => (
          <div key={i} className={`cell ${item.isColor && 'selected-cell'}`} draggable onDragOver={(e) => handleOnDragOver(e, item.pos)}
          onDrag={(e) => handleDrag(e, item.pos)}>
            {item.pos}
          </div>
        ))
      }
    </div>
  </div>
 </div>
  )
}

export default App
