let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const ms = document.getElementById("milliseconds");
const sec = document.getElementById("seconds");
const min = document.getElementById("minutes");
const hr = document.getElementById("hours");
const lapList = document.getElementById("lapList");

function updateDisplay(){

ms.innerText = milliseconds < 10 ? "0"+milliseconds : milliseconds;
sec.innerText = seconds < 10 ? "0"+seconds : seconds;
min.innerText = minutes < 10 ? "0"+minutes : minutes;
hr.innerText = hours < 10 ? "0"+hours : hours;

}

function stopwatch(){

milliseconds++;

if(milliseconds === 100){
milliseconds = 0;
seconds++;

if(seconds === 60){
seconds = 0;
minutes++;

if(minutes === 60){
minutes = 0;
hours++;
}
}
}

updateDisplay();

}

document.getElementById("startBtn").onclick = ()=>{

if(timer !== null) return;

timer = setInterval(stopwatch,10);

};

document.getElementById("pauseBtn").onclick = ()=>{

clearInterval(timer);
timer = null;

};

document.getElementById("resetBtn").onclick = ()=>{

clearInterval(timer);
timer = null;

milliseconds = 0;
seconds = 0;
minutes = 0;
hours = 0;

lapList.innerHTML = "";

updateDisplay();

};

document.getElementById("lapBtn").onclick = ()=>{

let li = document.createElement("li");

li.innerText =
`${hr.innerText}:${min.innerText}:${sec.innerText}:${ms.innerText}`;

lapList.prepend(li);

};