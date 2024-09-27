// const card = document.querySelector('.card')
const card = document.getElementById('card');
let text = document.getElementById('text');
text.textContent = "Нажмите на открытку что бы открыть её."
card.onclick = () => {
    if(card.className == "card"){
        card.className = 'card-back'
        text.textContent="Дорогие Александр и Екатерина!  Приглашаем Вас на торжество,посвященное нашему бракосочетанию,которое состоится 21 июня 2011 года в 17:00в банкетном зале отеля Holiday Inn,по адресу: Ленинский пр-т, д.24Будем счастливы видеть Вас на нашем празднике!Ксения и Олег"
    }else if(card.className == "card-back"){
        card.className = 'card'
        text.textContent = "Нажмите на открытку что бы открыть её."
    }
}