const secondHand=document.querySelector('.secondHand')
const minuteHand=document.querySelector('.minuteHand')
const hourHand=document.querySelector('.hourHand')
const timeChange = () => {
    const now=new Date;
    const seconds=now.getSeconds();
    const secDegrees=((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secDegrees}deg)`;
    console.log(seconds);
    
    const minutes=now.getMinutes();
    const minDegrees=((minutes/60)*360)+90
    minuteHand.style.transform=`rotate(${minDegrees}deg)`;

    const hours=now.getHours();
    const hourDegrees=((hours/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`;
    

}
setInterval(timeChange,1000)