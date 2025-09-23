import React from 'react'

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
  return (
    <div>
      {/** title */}
      {/** screen */}
      {/** seat map */}
      {/** legend */}
      {/** summary */}
      {/** Book Button */}
    </div>
  )
}

export default CinemaSeatBooking