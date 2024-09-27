let day = document.getElementById('days')
let hour = document.getElementById('hours')
let min = document.getElementById('minutes')
let sec = document.getElementById('seconds')
let text = document.getElementById('text')

let interval = setInterval(() => {
        let date = new Date()
        let x = new Date(2024, 8, 16)
        day.textContent = `Дни: ${Math.floor((x - date) / 1000 / 60 / 60 / 24)}`
        hour.textContent = `Часы:  ${Math.floor(((x - date) / 1000 / 60 / 60) % 24)}`
        min.textContent = `Минуты:   ${Math.floor(((x - date) / 1000 / 60 ) % 60)}`
        sec.textContent = `Секунды:   ${ Math.floor(((x - date) / 1000) % 60 )}`
        if(x <= date){
            clearInterval(interval)
            day.textContent = `Дни: 0`
            hour.textContent = `Часы: 0`
            min.textContent = `Минуты: 0`
            sec.textContent = `Секунды: 0`
            text.textContent = "Поздравляю"   
        }
    }, 1000);