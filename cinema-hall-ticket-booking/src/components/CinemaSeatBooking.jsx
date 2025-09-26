import React, { useMemo, useState } from 'react'

const CinemaSeatBooking = ({
  layout ={
    rows: 8,
    seatsPerRow: 12,
    aislePosition: 6
  },
  seatTypes = {
    regular: { name: "Regular", price: 150, rows: [0, 1, 2]},
    premium: { name: "Premium", price: 250, rows: [3, 4, 5]},
    vip: { name: "VIP", price: 350, rows: [6, 7]},
  },
  bookedSeats = [],
  currency = "₹",
  onBookingComplete = () => {},
  title = "Cinema Hall Ticket Booking",
  subtitle = "Select your preferred seats",

}) => {

  const initializeSeats = useMemo(() => {
    const seats = [];
    
  }, [layout, seatTypes, bookedSeats]);

  const [seats, setSeats] = useState(initializeSeats);
  return (
    <div className='w-full min-h-screen bg-gray-50 p-4'>
      {/** title */}
      <div className='max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6'>
        <h1 className='text-2xl lg:text-3xl font-bold text-center mb-2 text-gray-800'>{title}</h1>
        <p className='text-center lg:text-2xl text-gray-600 mb-6'>{subtitle}</p>
      
      
        {/** screen */}
        <div className='mb-8'>
          <div className='w-full h-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-lg
          mb-2 shadow-inner'/>
          <p className='text-center text-sm text-gray-500 font-medium'>SCREEN</p>
        </div>
      </div>
      {/** seat map */}
      <div className='mb-6 overflow-x-auto'>
        <div className='flex flex-col items-center min-w-max'>
          {

          }
        </div>
      </div>
      {/** legend */}
      {/** summary */}
      {/** Book Button */}
    </div>
  )
}

export default CinemaSeatBooking