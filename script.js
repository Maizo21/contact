"use strict";

let btnStart = document.querySelector(".button-start button");
let rocket = document.querySelector(".button-start .button-image");
let allBtnNext = document.querySelectorAll(".next-button");
let allBtnPrev = document.querySelectorAll(".prev-button");
let allSlides = document.querySelectorAll("section");
let nameUser;
let options = document.querySelectorAll(".selector-jobs div input");
let sendBtn = document.querySelector(".submit-container button");

btnStart.addEventListener("click", function () {
  rocket.classList.add("rocket-animation");
  btnStart.classList.add("start-animation");
  setTimeout(function () {
    allSlides[0].classList.add("hidden");
    allSlides[1].classList.remove("hidden");
    if (btnStart.classList.contains("start-animation")) {
      rocket.classList.remove("rocket-animation");
      btnStart.classList.remove("start-animation");
    }
  }, 1500);
});

allBtnNext.forEach(function (btnNext, index) {
  btnNext.dataset.index = index;
  btnNext.addEventListener("click", function () {
    if (this.dataset.index == 1) {
      nameUser = document.querySelector(".second-slide .input-name").value;
      document.querySelector(".third-slide h2 span").innerHTML = nameUser;
      document
        .querySelectorAll(".second-slide input")
        .forEach(function (input, index) {
          if ((input.value == " ") | (input.value == "")) {
            alert(`'${input.placeholder}' is required`);
            return;
          } else {
            allSlides[index].classList.add("hidden");
            allSlides[2].classList.remove("hidden");
            return;
          }
        });
    } else {
      allSlides[index].classList.add("hidden");
      allSlides[index + 1].classList.remove("hidden");
    }
  });
});

allBtnPrev.forEach(function (btnPrev, index) {
  btnPrev.addEventListener("click", function () {
    allSlides[index + 1].classList.add("hidden");
    allSlides[index].classList.remove("hidden");
  });
});

options.forEach(function (options) {
  options.addEventListener("click", function (e) {
    if (e.target.parentElement.classList.contains("selected")) {
      e.target.parentElement.classList.remove("selected");
    } else {
      e.target.parentElement.classList.add("selected");
    }
  });
});

sendBtn.addEventListener("click", function () {
  sendBtn.classList.add("send-animation");
  setTimeout(function () {
    sendBtn.classList.add("send-style");
    sendBtn.classList.remove("send-animation");
  }, 1000);

  setTimeout(function () {
    allSlides[3].classList.add("hidden");
    allSlides[4].classList.remove("hidden");
  }, 1500);
});
