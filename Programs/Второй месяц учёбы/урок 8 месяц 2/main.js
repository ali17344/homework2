// // function fon(x, y, z){
// //     console.log(x, y, z);
// // }
// let a = [1, 2, 3]
// let b = [...a, 4, 5]//добавление элементов в сущуствуещий массив
// console.log(b);
// // // console.log(b);
// // // fon(...a)//... это сприт оператори,троиточие обозначает все данные копируется
// console.log(a);
//Деструктуризация
// function dis(){
//     return [1, 5, 8]
// }
// let [a, b, s] = dis()
// console.log(b);
// console.log(a);
// console.log(s);
// function div(){
//     return {
//         a: 1,
//         b: 2,
//         s: 3
//     }
// }
// let {a: x, b: y, s: z} = div()
// console.log(x);
// console.log(y);
// console.log(z);
let dateNow = new Date();
// let dateOld = new Date(0);
let dateLine = new Date(2024, 6, 19)
let dir = dateLine.getTime() - dateNow.getTime()
// let milis = dir / 1000;
// let sec = dir / 1000 / 60;
// console.log(sec);
// console.log(dateNow);
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDate());
// console.log(dateNow.getDay());
// console.log(dateNow.getUTCHours());
// console.log(dateOld);
// console.log(dir);
let day = document.getElementById('day')
let hour = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
day.textContent = (dir / 1000 / 60 / 60 / 24).toFixed(0)
hour.textContent = ((dir / 1000 / 60 / 60 ) % 24).toFixed(0)
min.textContent = ((dir / 1000 / 60) % 60).toFixed(0) 
sec.textContent = ((dir / 1000) % 60).toFixed(0)// Math.floor тоже чтобы убирать после точки