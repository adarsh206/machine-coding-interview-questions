import React from 'react'

const Accordion = ({ items }) => {
  return (
    <div>
        {
            items.map((item, index) => (
                <div key={index}>
                    <button className='accordion-title'>
                        {item.title}
                    </button>
                    <div className='accordion-content'>
                        {item.content}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Accordion