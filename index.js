// let hour = date.getHours()
// let minute = date.getMinutes()
let thirdContainer = document.getElementById('ThirdContainer');
thirdContainer.style.backgroundImage = 
setInterval(()=>{
  if(document.getElementsByName('img').values){
    console.log(document.getElementsByName('img').value);
  }
    let date = new Date()
    let hour = date.getHours()+3
    let min = date.getMinutes()+15
    let sec = date.getSeconds()+15
    
function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
    //   time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }
  //  
 hour = tConvert (hour+':00:00');
 hour = hour.toLocaleString().split(':');
 hour = hour[0];

document.getElementById("hour21").setAttribute('style',`z-index: -1;
width: 100%;
height: 0%;
position: absolute;
border: 3px solid black;
top: 49%;
left: 50%;
transform: rotate(${((hour)/12)*360}deg) translate(-50%, -40%);`);
document.getElementById("hour22").setAttribute('style',`z-index: -1;
width: 100%;
height: 0%;
position: absolute;
border: 2px solid brown;
top: 50%;
left: 50%;
transform: rotate(${((min)/60)*360}deg) translate(-50%, -40%);`);
document.getElementById("hour23").setAttribute('style',`z-index: 1;
width: 100%;
height: 0%;
position: absolute;
border: 1px solid green;
top: 50%;
left: 50%;
transform: rotate(${(((sec))/60)*360}deg) translate(-50%, -50%);`)
console.log(hour,min,sec);
},1000)

