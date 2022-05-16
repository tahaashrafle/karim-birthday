let btn = document.querySelector(".btn");
let clickMe = document.querySelector(".click-me");
let card = document.querySelector(".card");
let sound = document.querySelector(".sound")


function happyBirth(){
    btn.classList.add("hide");
    card.classList.remove("hide");
    sound.setAttribute("src", "sound.mp3")
}

