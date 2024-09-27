// // Task 1
// // Напишите функцию, которая вернет текст внутри первого тэга - li.

// const task1 = () =>{
//     return document.querySelector('li').textContent
// }
// // Task 2
// // Напишите функцию, которая вернет массив с текстами внутри тэгов - li.

// const task2 = () =>{
//     const nodeList = document.querySelectorAll('li');
//     return Array.from(nodeList).map( item => item.textContent);
// }

// // Task 3
// // Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом list-item

// const task3 = () => {
//     const list = document.querySelector(`.list-item`)
//     const arr = Array.from(list);
//     return arr.map(()=>{
//     return item.textContent
// })
// }
// // console.log(task3());



// // Task 4
// // Напишите функцию, которая вернет массив со значениями аттрибута class внутри тэгов элементов с классом list-item


// const task4 = () =>{
//     const list = document.querySelector(`.list-item`)
//     const arr = Array.from(list);
//     return arr.map(()=>{
//     return item.className
// })
// } 
// // console.log(task4());


// // Task 5
// // Напишите функцию, которая вернет массив со значениями аттрибута data-test-id внутри тэгов элементов с классом list-item.
// // Этот аттрибут написан для тестирования программы специальным роботом и по нему этот робот находит нужные элементы. Цель его - дать возможность роботу зацепиться за нужные элементы

// const task5 = () =>{
//     const list = document.querySelector(`.list-item`)
//     const arr = Array.from(list);
//     return arr.map(item => item.getAttribute('data-test-id'))
// }
// console.log(task5());


// // Task 6
// // Вы пишете робота, который проверяет, что страница отображается корректно, по правилам внутри элемента с классом list-item должен быть текст цвета. И у этого же элемента должен быть класс с текстом цвета.
// // Например
// // <li class="list-item green" data-test-id="1">green</li>  
// // Но база данных была повреждена и по ошибке некоторые элементы стали отображаться с некорректными цветами.
// // <li class="list-item orange" data-test-id="3">yellow</li>  
// // Ваша задача вернуть массив аттрибутов data-test-id у элементов, у которых сломана логика. То есть текст внутри не имеет соответствующего класса.
// // Используйте map для обхода массива. Иными словами элемент считается сломанным если в классах не содержится текста элемента.

// const task6 = () =>{
//     const list = document.querySelectorAll(`.list-item`)
//     const arr = Array.from(list);
// const arr2 = arr.filter(item => !item.className.includes(item.textContent));
// return arr2.map(item => item.getAttribute('data-test-id'))
// }
// // console.log(task6());


// // Task 7
// // Обновите текст всех элементов с классом list-item, по следующему шаблону
// // <li class="list-item green" data-test-id="1">green</li>  
// // Стало
// // <li class="list-item green" data-test-id="1">1 green</li>  
// // То есть ${data-test-id} ${text}
// // Используйте forEach
// // yourElementsArray.forEach((element) => {  
// // })  

// const task7 = () =>{
//     const list = document.querySelectorAll(`.list-item`);
// list.forEach((element) => {  
// element.textContent = `${element.getAttribute('data-test-id')} ${element.textContent}`
// })  

// }
// // task7()

// // Task 8
// // Вы знаете, что в документе есть сломанные элементы с классом list-item у которых класс не соответствует содержимому. Ваша задача их удалить. Для обхода элементов для удаления используйте forEach
// // и удаления
// // Чтобы удалить элемент - вы должны взять родителя этого элемента и удалить его потомка.
// // yourElementsArray.forEach((element) => {  
// // })  

// const task8 = () => {
//     const list = document.querySelectorAll(`.list-item`);
//     list.forEach((item)=>{
// if (!item.className.includes(item.textContent)) {
//     item.parentNode.removeChild(item)
// }
//     })

// }
// // task8()

// // Task 9
// // На сайте есть поле для ввода с id = "secret-login". Ваша задача - изменить его содержимое на You were hacked

// const task9 = () => {
// const input = document.getElementById('secret-login')
// input.value = ` You were hacked`
// }

// // Task 10
// // Один из способов хакерских атак - это XSS - Cross Site Scripting. Идея заключается в том, что хакер вставляет вредоносный код в незащищенное поле и он будет выполняться в браузерах жертвы. Сейчас вы такой хакер, который нашел уязвимость сайта.
// // У вас есть кнопка с айди button-send и поле с id = "secret-login". Ваша задача:
// // •	добавить на кнопку обработчик события click, который(все что происходит дальше - происходит внутри обработчика)
// // •	вызвать функцию-коллбек переданную в аргументе
// // •	дальше меняет текст внутри селектора .login-screen на You was hacked
// // По этическим соображениям, я не должен такие примеры давать. Но с другой стороны, если вы поймете, как это работает вы будете понимать потенциальные проблемы безопасности

// const task10 = () =>{
//     document.getElementById('button-send').onclick = () =>{
//         document.getElementById('secret-login').value = `You was hacked`
//     }
// }
// // task10()


// // Task 11
// // Напишите функцию, которая добавляет div элемент внутрь элемента с селектором #append-div
// // у дива должен быть айди #just-text и текст внутри Hello

// const task11 = () =>{
//     const div = document.createComment9('div');
//     div.id = 'just-text';
//     div.textContent = 'Hello World'
//     document.getElementById('append-div').append(div)
// }
// // task11()

// // Task 12
// // Напишите функцию, которая добавляет ul элемент внутрь элемента с селектором #append-div
// // у ul элемента должен быть айди #list
// // Внутри ul элемента находится 10 тегов li с текстом от Child 1,...., Child 10

// const task12 = () =>{
//     const ul = document.createElement('ul');
//     ul.id = 'list';
//     for(let i = 0; i < 10; i++){
//         let li = document.createElement('li');
//         li.textContent = `Child ${i + 1}`;
//         ul.append(li)
//     }
//     document.getElementById('append-div').append(ul)
// }

// // task12()
