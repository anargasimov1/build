
"use srtict";
// hamburger menu
const btn = document.getElementById("btn"),
    menu = document.getElementById("menu");

let modal = false;

btn.addEventListener("click", () => {
    modal = !modal;
    modal === true ? menu.style.height = "200px" : menu.style.height = "0";
});

// footer swiper

const footer_btn_left = document.getElementById("footer_swiper_button_left"),
    footer_btn_rigth = document.getElementById("footer_swiper_button_rigth"),
    footer_swiper = document.getElementById("footer_swiper"),
    footer_swiper_content = document.querySelector(".footer_swiper"),
    url2 = "https://living-chemical-shampoo.glitch.me/footerswiper";

let temp = 0;
let footercount = 0;

fetch(url2)
    .then(r => r.json())
    .then(data => footerswiper(data))
    .catch(error => footer_swiper_content.innerHTML = `${error}`, footer_swiper_content.style.fontSize = "35px")

function footerswiper(data) {
    footercount = data.length;
    data.map(i => footer_swiper.innerHTML +=
        `
        <div class="footer_swiper_slide">
        <p>"${i.title}"</p>
        <div class="items">
            <img src=${i.img} alt="...">
            <div class="items1">
                <p>${i.name}</p>
                <i>${i.profession}</i>
            </div>
           </div>
          </div>
        `
    )
}

footer_btn_rigth.addEventListener("click", () => {
    if (temp < footercount - 2) {
        temp++;
        footer_swiper.style.transform = `translateX(${500 * -temp}px)`
    }
})


footer_btn_left.addEventListener("click", () => {
    if (temp > 0) {
        temp--;
        footer_swiper.style.transform = `translateX(${500 * -temp}px)`
    }
})

// hover contents

const img1 = document.querySelector(".img1"),
    img2 = document.querySelector(".img2"),
    img3 = document.querySelector(".img3"),
    img4 = document.querySelector(".img4"),
    icon1 = document.querySelector(".icon1"),
    icon2 = document.querySelector(".icon2"),
    icon3 = document.querySelector(".icon3"),
    icon4 = document.querySelector(".icon4");

img1.addEventListener("mouseover", () => {
    icon1.style.opacity = "1";
    img1.style.opacity = "0.8";
})

img1.addEventListener("mouseout", () => {
    icon1.style.opacity = "0";
    img1.style.opacity = "1";
})

img2.addEventListener("mouseover", () => {
    icon2.style.opacity = "1";
    img2.style.opacity = "0.8";
})

img2.addEventListener("mouseout", () => {
    icon2.style.opacity = "0";
    img2.style.opacity = "1";
})

img3.addEventListener("mouseover", () => {
    icon3.style.opacity = "1";
    img3.style.opacity = "0.8";
})

img3.addEventListener("mouseout", () => {
    icon3.style.opacity = "0";
    img3.style.opacity = "1";
})

img4.addEventListener("mouseover", () => {
    icon4.style.opacity = "1";
    img4.style.opacity = "0.8";
})

img4.addEventListener("mouseout", () => {
    icon4.style.opacity = "0";
    img4.style.opacity = "1";
})   
