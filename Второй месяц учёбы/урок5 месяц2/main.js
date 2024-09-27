////виды обращения к CSS
// let root = document.getElementById('root')
// console.log(root);
// let h = document.getElementsByTagName('h1')
// console.log(h);
// let box = document.getElementsByClassName('box')
// console.log(box);
//let element = document.querySelector('')//универсальный, класс указываетсяя через точку,
// let img = document.getElementById('img')
// img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrc3fFzl-7xsl3mnw7cH-3h8RAcg2Hnnsyg&s')// добовляет атрибут
// root.removeAttribute('id')//удаляет атрибут
// console.log(img.getAttribute( 'src'))//ищет атрибут
// root.className = 'boxing'// изменяет название класса
// root.textContent = ''//добовляет текст
// root.innerHTML = `<h2>Урок 5</h2>`//можно записывать теги
// let cont = document.createElement('h2');//добавляет элемент
// cont.textContent = 'js'
// document.body.append(cont);
// box[1].append(cont);
// console.log(box);
// let btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     alert('Точно?');
//     let i = prompt('введите скольковам лет');
//     if(i < 18){
//         alert("не правда")
//     }else{
//         alert(' правда')
//     }
// })
// let inp = document.getElementById('input')
// inp.onchange = () => {
//     alert('изменены ввод данных')
// }
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let mir =  document.createElement('h4');
    mir.textContent = input.value
    document.body.append(mir);
})
// let inp = document.getElementById('input')