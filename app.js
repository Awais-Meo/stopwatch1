var min = 0;
var sec = 0;
var msec = 0;
var minHeadingn = document.getElementById("min");
var secHeadingn = document.getElementById("sec");
var msecHeadingn = document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecHeadingn.innerHTML = msec;
    if(msec >= 100){
      sec++
      secHeadingn.innerHTML = sec
      msec = 0;
    }else if(sec >= 60){
      min++
      minHeadingn.innerHTML = min
      sec = 0
    }
}

function start(){
    interval = setInterval(timer,10)
}

function stop(){
    clearInterval( interval )
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeadingn.interHTML = min
    secHeadingn.innerHTML = sec
    msecHeadingn.innerHTML = msec
    stop()
}