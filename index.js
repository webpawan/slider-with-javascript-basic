const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slidenumber = 1;
const length = images.length;

const PrevSlide = () => {
  slider.style.transform = `translateX(-${(slidenumber - 2) * 600}px)`;
  slidenumber--;
};
const NextSlide = () => {
  slider.style.transform = `translateX(-${slidenumber * 600}px)`;
  slidenumber++;
};

const FirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slidenumber = 1;
};

const LastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 600}px)`;
  slidenumber = length;
};

const ChangeColor = () => {
  resetBg();
  buttons[slidenumber - 1].style.backgroundColor = "white";
};

right.addEventListener("click", () => {
  //   if (slidenumber < length) {
  //     NextSlide();
  //   } else {
  //     FirstSlide();
  //   }
  slidenumber < length ? NextSlide() : FirstSlide();
  ChangeColor();
});

left.addEventListener("click", () => {
  slidenumber > 1 ? PrevSlide() : LastSlide();
  ChangeColor();
});

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 600}px)`;
    slidenumber = i + 1;
    button.style.backgroundColor = "white";
  });
});
