if (document.getElementById("header")) {
     const menu = document.querySelector(".menu");
     const menuItems = document.querySelectorAll(".menu__link");
     const hamburger = document.querySelector(".hamburger");
     const closeIcon = document.querySelector(".closeIcon");
     const menuIcon = document.querySelector(".menuIcon");

     function toggleMenu() {
          if (menu.classList.contains("showMenu")) {
               menu.classList.remove("showMenu");
               closeIcon.style.display = "none";
               menuIcon.style.display = "block";
          } else {
               menu.classList.add("showMenu");
               closeIcon.style.display = "block";
               menuIcon.style.display = "none";
          }
     }

     hamburger.addEventListener("click", toggleMenu);
     //modal
     const btnOpen = document.getElementById("btn-open"),
          btnClose = document.getElementById("btn-close");

     const overelay = document.getElementById("overlay");
     const modal = document.getElementById("wrapper-modal");

     btnOpen.addEventListener("click", function () {
          modal.classList.add("active");
     });

     function closeModal() {
          modal.classList.remove("active");
     }

     overelay.addEventListener("click", closeModal);
     btnClose.addEventListener("click", closeModal);
}

//Accordeon
if (document.getElementById("process")) {
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

     btn.forEach((question) =>
          question.addEventListener("click", toggleAccordeon)
     );
}

//Сalculate
if (document.getElementById("calculator")) {
     let boxCost = 23000;
     let clearCost = 25000;
     let keyCost = 27500;

     function calculate() {
          document
               .querySelector(".calc__data")
               .classList.remove("calc__data_display");
          if (document.calc.op[0].checked) {
               document.getElementById("costRes").innerHTML =
                    square.value * boxCost + " ₽";
               document.getElementById("dataRes").innerHTML = "3 месяца";
               document.getElementById("complektRes").innerHTML = "Коробка";
               document
                    .querySelector(".calc__data")
                    .classList.add("calc__data_display");
          }

          if (document.calc.op[1].checked) {
               document.getElementById("costRes").innerHTML =
                    square.value * clearCost + " ₽";
               document.getElementById("dataRes").innerHTML = "5 месяца";
               document.getElementById("complektRes").innerHTML =
                    "Чистовая отделка";
               document
                    .querySelector(".calc__data")
                    .classList.add("calc__data_display");
          }

          if (document.calc.op[2].checked) {
               document.getElementById("costRes").innerHTML =
                    square.value * keyCost + " ₽";
               document.getElementById("dataRes").innerHTML =
                    "6 месяца и более ";
               document.getElementById("complektRes").innerHTML = "Под ключ";
               document
                    .querySelector(".calc__data")
                    .classList.add("calc__data_display");
          }
          document
               .querySelector(".calc__data")
               .classList.remove(".calc__data_none");
          document.getElementById("squareRes").innerHTML = square.value + " m²";
     }
}
