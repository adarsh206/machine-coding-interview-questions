// sort on the basis of start time, if same, end time basis

export const timeIntoMinutes = (time) => {
    
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
}
const isOverlap = (event1, event2) => {
    return timeIntoMinutes(event2.start) < timeIntoMinutes(event1.end);
};

const calculateEventLayout = (events) => {
    console.log(events);

    const sortedEvents = [...events].sort((a, b) => {
        const start1 = timeIntoMinutes(a.start);
        const start2 = timeIntoMinutes(b.start);
        const diff = start1 - start2;

        if(diff !== 0) return diff;

       const end1 = timeIntoMinutes(a.end);
       const end2 = timeIntoMinutes(b.end);

       return end2 - end1;
    })
     
    console.log(sortedEvents);

    const layout = [];

    for(const event of sortedEvents){
        const overlaps = layout.filter((layoutEvent) => isOverlap(layoutEvent, event))
    }

    return layout;

}

export default calculateEventLayout