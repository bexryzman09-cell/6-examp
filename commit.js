const btn = document.querySelector(".commit__btn");
const textarea = document.querySelector(".commit__textarea");
const form = document.querySelector(".coomit__form");

btn.addEventListener("click", function () {

    if (textarea.value.trim() !== "") {

        confetti({
            particleCount: 1050,
            spread: 200,
            origin: { y: 0.6 }
        });

        form.reset();

    } else {
        alert("Напиши комментарий сначала ✍️");
    }

});


    
