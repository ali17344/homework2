let day = document.getElementById('day')
let hour = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let time = setInterval(() => {
    let dateNow = new Date()
    let dateLine = new Date(2024, 6, 19)
    day.textContent = (( dateLine.getTime() - dateNow.getTime()) / 1000 / 60 / 60 / 24).toFixed(0)
    hour.textContent = ((( dateLine.getTime() - dateNow.getTime())/ 1000 / 60 / 60) % 24).toFixed(0)
    min.textContent = ((( dateLine.getTime() - dateNow.getTime()) / 1000 / 60) % 60).toFixed(0)
    sec.textContent = (((( dateLine.getTime() - dateNow.getTime()) / 1000) % 60).toFixed(0)) ; 
    if(dateLine <= dateNow){
        clearInterval(time)
        day.textContent = 0
        hour.textContent = 0
        min.textContent = 0
        sec.textContent = 0
    }
    },1000)