let accordeon = document.querySelector(".jobs__accordeon");
let items = accordeon.querySelectorAll(".accordeon");
let btn = accordeon.querySelectorAll(".accordeon__heading");

console.log(accordeon);
console.log(items);
console.log(btn);

function toggleAccordeon() {
     let thisItem = this.parentNode;

     items.forEach((item) => {
          if (thisItem == item) {
               thisItem.classList.toggle("accordeon__active");
               return;
          }
          item.classList.remove("accordeon__active");
     });
}

btn.forEach((question) => question.addEventListener("click", toggleAccordeon));
