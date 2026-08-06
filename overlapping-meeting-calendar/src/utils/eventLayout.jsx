// sort on the basis of start time, if same, end time basis

export const timeIntoMinutes = (time) => {
    
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
}

const calculateEventLayout = (event) => {
    console.log(event);
    [...event].sort((a, b) => {
        console.log("a-> ", a);
        console.log("b-> ", b);
    })
  return (
    <div>eventLayout</div>
  )
}

export default calculateEventLayout