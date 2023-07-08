
"use srtict";
// hamburger menu
const btn = document.getElementById("btn"),
    menu = document.getElementById("menu");

let modal = false;

btn.addEventListener("click", () => {
    modal = !modal;
    modal === true ? menu.style.height = "200px" : menu.style.height = "0";
});

// wishlist

const contenier = document.querySelector(".contenier");

let data = JSON.parse(localStorage.getItem("wishlist"))
function items() {
    contenier.innerHTML = "";
    for (let i = 0; i < data.length; ++i) {
        contenier.innerHTML +=
            `
        <div class="swiper_slide_item">
        <div class="img_item"> <img src=${data[i].img}></div>
        <h3>${data[i].title}</h3>
        <p>${data[i].description}</p>
                  <><><><><><><><><><><><><><><><><>
        <button class="card_btn" type="button">$20 | Oreder Now</button>
              <button type="button"><i data-role = ${data[i].id} class="fa-solid fa-trash"></i> </button>
          </div>
        `
    }

}

items();

document.addEventListener("click", e => {
    if (e.target.dataset.role) {
        data.forEach((i,index)=>{
            if(e.target.dataset.role === i.id)
                data.splice(index,1)
        })

    }
    localStorage.removeItem("wishlist");
    localStorage.setItem("wishlist", JSON.stringify(data))
    items()
})

