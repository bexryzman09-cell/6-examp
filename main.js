

let login__form = document.querySelector(".login__form")
let login__user = document.querySelector(".login__user")
let login__password = document.querySelector(".login__password")

login__form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = login__user.value;
    let password = login__password.value;


    if (name == 'Bexruzbek' && password == '2009') {
        alert('Вход выполнен успешна');
        window.location.href = "index.html"
    }
    else {
        alert("Неверный пароль или логин")
    }
})

function togglePass() {
    let obj = document.getElementById('password__eye');

    if (obj.type == 'password') {
        obj.type = 'text';
    }
    else {
        obj.type = 'password';
    }
}

const commit__btn = document.querySelector(".commit__btn");
const commit__textarea = document.querySelector(".commit__textarea");
const coomit__form = document.querySelector(".coomit__form");


    