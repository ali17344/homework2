// let userName = document.getElementById('userName')
// let password = document.getElementById('password')
// let btn = document.getElementById('btn')
// let text = document.getElementById('text')

// let getPassword = /\w\d\w/gi
// let getUserName = /[A-Za-z]/g
// btn.addEventListener('click', () => {
//     if(password.value.match(getPassword) && userName.value.match(getUserName)){
//         text.textContent = 'Вы успешно зарегистрировались!';
//         text.style.color = 'green';
//     }
//     else{
//         text.textContent = 'Пароль должен содержать сочетание букв и цифр или введите имя только с латинскими буквами!'
//         text.style.color = 'red'
//     }

// })
// let root = document.getElementById('root')

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => res.json())
// .then((data) => {
//     data.forEach(element => {
//         user = element.name;
//         userName = element.userName;
//         email = element.email;
//         city = element.address.city;
//         company = element.company.name
//         root.innerHTML += `<div class="card"><h3>${user}</h3><h4>${userName}</h4><h4>${email}</h4><h4>${city}</h4><h4>${company}</h4></div>`
//     });
// })
let div = document.getElementById('div');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let id = document.getElementById('id').value; // Приводим к нижнему регистру
    let bodyValue = document.getElementById('userName').value.toLowerCase(); // Приводим к нижнему регистру
    let titleValue = document.getElementById('password').value.toLowerCase(); // Приводим к нижнему регистру

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
            div.innerHTML = `${data.title}`; // Очищаем div перед добавлением новых постов
            console.log(data);
        })
        .catch(() => {
            div.innerHTML += `<div class="error"><h2>Произошла ошибка!</h2></div>`;
        });
});
