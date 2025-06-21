import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ items }) => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

  return !items || (items.length === 0) ? <h1 className='heading'>No Items Available</h1> : (
    
    <div className='accordion'>
        {
            items.map((item, index) => (
                <div key={index} className='accordion-item'>
                    <button className='accordion-title' onClick={() => handleToggle(index)}>
                        {item.title}
                        {openIndex === index ? <FaChevronUp className='right'/> : <FaChevronDown className='right'/> }
                    </button>
                   {openIndex === index && <div className='accordion-content'>
                        {item.content}
                    </div>}
                </div>
            ))
        }
    </div>
  )
}

export default Accordion