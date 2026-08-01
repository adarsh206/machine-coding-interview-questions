

const DayTimeSlots = () => {

    const slots = Array.from({length: 24}, (_, index) => index);
    console.log(slots);

  return (
    <>
     {
        slots.map((slot) => {
            return <div>
                {slot} : 00
            </div>
        })
     }   
    </>
  )
}

export default DayTimeSlots