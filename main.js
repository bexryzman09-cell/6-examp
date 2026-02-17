
let login__form = document.querySelector(".login__form")
let login__user = document.querySelector(".login__user")
let login__password = document.querySelector(".login__password")

form.addEventListener("login__button", (e) => {
    e.preventDefault();
    console.log(login__user, login__password)
    let name = (login__user, login__password)
    let password = login__password.value;

   
    if (name === 'Bexryzbek' && password === '2009') {
        alert('Вход выполнен успешна');
        window.location.href = "smth.html"
    }
    else {
        alert("Неверный пароль или логин")
    }
})


