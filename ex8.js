function digitalClock(time){
    let count = 0;
    let hour = 0;
    let minute = 0;
    let sec = 0;

    minute = time / 60;
    hour = Math.floor(minute / 60);
    sec = (minute.toFixed(2)).toString().substring(4).padStart(2,'0')

    console.log(hour.toString().padStart(2,'0')+":"+(Math.floor(minute-60)).toString().padStart(2,'0')+":"+ sec);
}

digitalClock(5025);

