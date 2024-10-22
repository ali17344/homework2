let time = document.getElementById('time')
let check = document.getElementById('check')
let result = document.getElementById('result')
let btn = document.getElementById('btn')
let start = document.getElementById('start')
const timeFunc = () => {
    let interval = setInterval(() => {
    time.value -=1
    if(time.textContent < 1){
        clearInterval(interval)
    }
    }, 1000);
    
}
let stopTimer = () => {
        btn.disabled = true; 
        result.textContent = check.textContent / 10
}
let i = 0
btn.onclick = () => {
    if (i < 1) {
        setTimeout(() => {
            stopTimer()
        }, time.value * 1000)
        timeFunc()
    }
    i++;
    check.textContent = i
}
   