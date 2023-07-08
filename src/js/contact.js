"use srtict";
// hamburger menu
const btn = document.getElementById("btn"),
    menu = document.getElementById("menu");

let modal = false;

btn.addEventListener("click", () => {
    modal = !modal;
    modal === true ? menu.style.height = "200px" : menu.style.height = "0";
});



const name_input = document.querySelector(".name"),
    mesage = document.querySelector(".mesaj"),
    email = document.querySelector(".mail"),
    btn_send = document.getElementById("btn1"),
    url = "https://fluoridated-psychedelic-billboard.glitch.me/mesages";

btn_send.addEventListener("click", () => {
    let mesaj = mesage.value,
        post = email.value,
        name = name_input.value,
        mesagges = { mesaj, post, name };

    if (mesaj.trim() != "" && post.trim() != "" && name.trim() != "")
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mesagges)
        })
    mesage.value = "",
        email.value = "",
        name_input.value = "";

})

