import React from 'react'

const Accordion = ({ items }) => {
  return (
    <div>
        {
            items.map((item, index) => (
                <div key={index}>
                    <button>
                        {item.title}
                    </button>
                    <div>
                        {item.content}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Accordion