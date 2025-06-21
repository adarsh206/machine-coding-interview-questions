import React from 'react'

const Modal = ({ handleClose, handleOfferAccept }) => {

    const handleOutSideClick = (e) => {
        if(e.target.className === 'modal'){
            handleClose();
        }
    }

  return (
    <div className='modal' onClick={handleOutSideClick}>
        <div className='modal-content'>
            <button className='close-btn' onClick={handleClose}>
                X
            </button>
            <div className='content'>
                click the button below to accept the offer
            </div>
            <button className='accept-btn' onClick={handleOfferAccept}>
                Accept Offer
            </button>
        </div>
       
    </div>
  )
}

export default Modal