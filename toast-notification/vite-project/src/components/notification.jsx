import React from 'react';
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai'
import './notification.css';


const icons = {
  success : <AiOutlineCheckCircle />,
  info : <AiOutlineInfoCircle />,
  warning : <AiOutlineWarning />,
  error : <AiOutlineCloseCircle />
}

const Notification = ({type = "info", message, onClose = () => {}}) => {
  return (
    <div className={`notification ${type}`}>
        {/* icon */}
        {icons[type]}
        {/* message */}
        {message}
        {/* close button */}
        <AiOutlineClose color='white' onClick={() => onClose()} className='closeBtn'/>
    </div>
  )
}

export default Notification