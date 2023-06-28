const menu = document.querySelector("#menu");
const body = document.querySelector("body");
const moon = document.querySelector("#moon");
const hamburger = document.querySelector("#hamburger");
const hLinks = document.querySelectorAll("#hLink");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  if (menu.classList.contains("hidden")) {
    hamburger.innerHTML = `<i class="fa-solid fa-bars   mx-2 md:mx-4 md:hidden relative w-5 h-5 font-bold z-20 cursor-pointer text-3xl" id="hamburger"></i>`;
  } else {
    hamburger.innerHTML = `<i class="fa fa-times text-2xl text-white cursor-pointer "></i>`;
  };
});
hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    if (menu.classList.contains("hidden")) {
      hamburger.innerHTML = `<img src="./images/menu.png" id="hamburger" class="md:hidden w-5 h-5 font-bold z-20 cursor-pointer  " alt="">`;
    } else {
      hamburger.innerHTML = `<i class="fa fa-times text-2xl  cursor-pointer   "></i>`;
    }
  });
});
moon.addEventListener("click", () => {
  body.classList.toggle("dark");
  hamburger.classList.toggle("text-white");
  moon.classList.toggle("text-white")
});
////emailing
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Messaging';

   const serviceID = 'default_service';
   const templateID = 'template_jcudk2w';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Message';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Message';
      alert(JSON.stringify(err));
    });
});
