// work.userName = "Ali"
// document.write(`<h1> Логин: ${work.userName}</h1>`)
// document.write(`<h1>Пароль: ${work.password}</h1>`)
// document.write(`<h1>Фамилия: ${work.saurname}</h1>`)
// document.write(`<h1>Возраст : ${work.age}</h1>`)
// console.log(Object.keys(work));
// console.log(Object.values(work));
// // Виды создания объектов
// let obj = new Object();
// let obj = {};
// let obj = {
//     userName: "Arap", 
//     age:18, 
//    // func: console.log("ascasc"),//надо просто обратиться к методу
//     name:"Ali",
//     'eng language': 'English',
//     work: {
//         companyName: "Megacom",
//         creat: 2000,
//     }
// }
// // Object.freeze(obj)//замораживает объект
// // console.log(obj['eng language']);//при использование пробелов в названиях
// // // obj.name = "Ackbar"
// // obj.func
// // let obj2 = {...obj}; //копирует внутроность три точки и скобки а просто название объекта копирует всё 
// // obj2.age = 19;
// // console.log(obj2);
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// let arr = [12, 'asasin', 12, 'password', ['hello', 12], obj, 13 ]
// console.log(arr[4]);
// arr[2] = "Abduckarim"
// console.log(arr);
//  for(let item in arr){
// //     console.log(`index: ${item}`, item, `element ${arr[item]}`);
// // }//можно узнать что где хранится item новая переменная in проходит через что? arr 
// if(typeof(arr[item] === Object)){
// console.log(arr[item].userName);
// }
// else{console.log('это не объект');}}
// arr.push('sdfgh', 12, {name:234}, [1, 2, 3])//добавляет к коду в конец
// console.log(arr[arr.length - 1]);// .length показывает длинну кода - 1 последняя элемент

// arr.forEach((element) => {
//     console.log(element);
// })//выполняет функцию for
//  let arr = [
//     {userName:'ali', age:18},
//     {userName:'ali', age:18},
//     {userName:'ali', age:18}
// ]
// let arr = {userName:'ali', age:18}
// arr.car = 'BMW'
// console.log(arr);
// console.log(arr.map(item => {
//     return{ ...item,
//     work:true
// }
// }));
// console.log(arr.filter((el) => {
// return el % 2 !== 0
// }));//используем когда надо чтотото отфильтровать
let arr = [1,2,3,4,5,6]
let a = '1'
let b = 1
console.log('aybek' > 'beka')
//     return element * 2
//     // if(element == 2){
//     //     return element
//     // }
// }));// в map можно использовать условия
// console.log( arr.sort());