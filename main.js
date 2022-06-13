console.log("rodando")

const $timer = document.getElementById("timer")
const $timeType = document.getElementById("time-type")
const $btnPause = document.getElementsByClassName("btn-pause")[0]
const $btnDarkMode = document.getElementById("btn-darkMode")


var conterSeg = 60
var conterMin = 24
var mode = true
var time_free = 0
var timer_on = 0
var timeout 
    window.sessionStorage.setItem('min', conterMin)
    window.sessionStorage.setItem('seg', conterSeg)
    conterMin = sessionStorage.getItem('min')
    conterSeg = sessionStorage.getItem('seg')

const audio = new Audio("audio.mp3");
    console.log(conterMin)
    if (conterMin <= 9 && conterSeg <= 9) {
        $timer.innerHTML =  "0"+conterMin+":0"+conterSeg
    }else if (conterMin <= 9) {
        $timer.innerHTML =  "0"+conterMin+":"+conterSeg
    }else if ( conterSeg <= 9) {
        $timer.innerHTML =  conterMin+":0"+conterSeg
    } else{
        $timer.innerHTML =  conterMin+":"+conterSeg
    }
function timedCount(){
    
   

    conterSeg --
    if (conterSeg <= 0) {
        conterMin --
        conterSeg = 60
    }
    
    if(conterMin <= -1 && time_free){
       time_free = 1
       conterMin = 4
       
       audio.play()
       console.log(time_free)
    }
    if(conterMin <= -1 && !time_free){
        time_free = 0
        conterMin = 24
        
        audio.play()
        console.log(time_free)
     }
    
    if (conterMin <= 9 && conterSeg <= 9) {
        $timer.innerHTML =  "0"+conterMin+":0"+conterSeg
    }else if (conterMin <= 9) {
        $timer.innerHTML =  "0"+conterMin+":"+conterSeg
    }else if ( conterSeg <= 9) {
        $timer.innerHTML =  conterMin+":0"+conterSeg
    } else{
        $timer.innerHTML =  conterMin+":"+conterSeg
    }
    
    if (!time_free) {
        $timeType.innerHTML = "Focus time"
    }else{
        $timeType.innerHTML = "Free time"
    }
    window.sessionStorage.setItem('min', conterMin)
    window.sessionStorage.setItem('seg', conterSeg)
    timeout = setTimeout(timedCount,1000)
}

function startTime(){
    if (!timer_on) {
        timer_on = 1
        $btnPause.style.backgroundColor = "" 
        timedCount()
    }
    
}

function pauseTime(){ 
    clearTimeout(timeout)
    
    $btnPause.style.backgroundColor = "rgb(188, 116, 116)" 
    timer_on = 0
}

$btnDarkMode.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked)
   document.getElementsByTagName('main')[0].classList.toggle("dark", e.target.checked)
   document.getElementsByClassName('btn-start')[0].classList.toggle("dark", e.target.checked)
   document.getElementsByClassName('btn-pause')[0].classList.toggle("dark", e.target.checked)
})
