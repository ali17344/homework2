let hours = document.getElementById('hours');
let minuts = document.getElementById('minuts');
let seconds = document.getElementById('seconds');
let btn = document.getElementById('btn');
let resalt = document.getElementById('resalt')
btn.addEventListener('click', () => {
  let setinterval = setInterval(() => {
        seconds.value -=1;
        if(seconds.value == 0){
             minuts.value -=1;
            seconds.value = 60
        }else if(minuts.value == 0){
             hours.value -=1;
            minuts.value = 60
        }
    },1000)
    resalt.addEventListener('click', () => {
      clearInterval(setinterval)
    })
})
