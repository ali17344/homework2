
let time = document.getElementById('temer');
let count = document.getElementById('count');
let countResult = document.getElementById('countResult');
let btn = document.getElementById('btn');
const stopTimer = () => {
    btn.disabled = true;
    countResult.textContent = count.textContent / 10;
};

const timeFunc = () => {
    let interval = setInterval(() => {
    temer.value -= 1;
    if(temer.value < 1){
        clearInterval(interval)
    }
    
}, 1000)}
let i = 0
btn.onclick = () => {
    if(i < 1){
        setTimeout(() => {
            stopTimer()
        }, temer.value * 10000)
        timeFunc()
    }
    i++;
    count.textContent = i
}

