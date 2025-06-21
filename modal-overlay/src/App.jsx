
import { useState } from 'react'
import './App.css'
import Modal from './Modal';

function App() {

  const [isShow , setIsShow] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const handleOpenModal = () => {
    setIsShow(true);
  }

  const handleClose = () => {
    setIsShow(false);
  }

    const handleOfferAccept = () => {
    setIsOfferAccepted(true);
    setIsShow(false);
  }

  return (
   <div>
    <div className='show-offer'>
      {
        !isOfferAccepted &&  <button className='offer-btn' onClick={handleOpenModal}>
        Show Offer
      </button>
      }
      {
        isOfferAccepted && 
        <div style={{ fontSize: 50}}>Offer Accepted</div>
      }
     
    </div>
    {
      isShow && <Modal handleClose={handleClose} handleOfferAccept={handleOfferAccept} />
    }
   </div>
  )
}

export default App
