import { useState } from "react"


const VirtualList = ({ list, height, width, itemHeight }) => {

    const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
    const visibleList = list.slice(indices[0], indices[1] + 1);

    const handleScroll = (e) => {
        const { scrollTop } = e.target;
        console.log(scrollTop);
        const newStartIndex = Math.floor(scrollTop / itemHeight);
        const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
        setIndices([newStartIndex, newEndIndex]);
    }
    
  return (
        <div onScroll={handleScroll} className="container" style={{ height, width, background: 'grey', overflow: 'auto'}}>
            <div style={{ height: list.length * itemHeight}}>
                {
                    visibleList.map((item) => {
                        return (
                            <div className="item" style={{ height: itemHeight, background: "coral", borderTop: '5px solid grey'}}>
                                {"Item " + item}
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}
 
export default VirtualList