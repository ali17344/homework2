let btn = document.getElementById('btn')
let infoCard = document.getElementById('root')
btn.addEventListener('click',function(event) {
    let id = document.querySelector('input').value
    event.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
        infoCard.innerHTML += `<div class="root"><h3>City:${data.address.city}</h3><h3>Name:${data.name}</h3><h3>Username:${data.username}</h3><h3>Phone:${data.phone}</h3><h3>Email:${data.email}</h3></div>`
    }).catch((error) => {
      infoCard.innerHTML += `<div class="root root2"><h3>Error:vedas ID from 1 to 10</h3></div>`
    })
})