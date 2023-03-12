const menu = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
    if (menu.classList.contains("hidden")) {
        hamburger.innerHTML = `<img src="./images/menu.png" id="hamburger" class="md:hidden w-5 h-5 font-bold z-20 cursor-pointer" alt="">`;
    } else {
        hamburger.innerHTML = `<i class="fa fa-times text-2xl text-white cursor-pointer "></i>`;
    }
})



