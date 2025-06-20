import React, { useState } from 'react'

const Accordion = ({ items }) => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

  return (
    
    <div className='accordion'>
        {
            items.map((item, index) => (
                <div key={index} className='accordion-item'>
                    <button className='accordion-title' onClick={() => handleToggle(index)}>
                        {item.title}
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