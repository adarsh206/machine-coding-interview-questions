import { useState } from "react"


const VirtualList = ({ list, height, width, itemHeight }) => {

    const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
    
  return (
        <div>
            Virtualized List 
        </div>
  )
}
 
export default VirtualList