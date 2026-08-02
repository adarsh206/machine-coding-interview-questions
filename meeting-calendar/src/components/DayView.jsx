
import DayTimeSlots from './DayTimeSlots'

const DayView = () => {
  return (
    <div className='calendar'>
      <div className='line'></div>
        <DayTimeSlots />
    </div>
  )
}

export default DayView