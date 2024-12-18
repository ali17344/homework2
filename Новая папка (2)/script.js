let btn = document.getElementById('btn')
let root = document.getElementById('root')
btn.addEventListener('click', function(e){
    e.preventDefault()
    let user = document.getElementById('user')
    let id = user.value
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        
        root.innerHTML += `<div><h1>${data.id}</h1></div>`
    })
})
