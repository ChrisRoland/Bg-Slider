const $body = $("body");
const $slides = $(".slide");
const $btnLeft = $("#left");
const $btnRight = $("#right");

let activeSlide = 0;

$btnRight.on("click", function () {
  activeSlide++;

  if (activeSlide > $slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

$btnLeft.on("click", function () {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = $slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  const bgImage = $slides.eq(activeSlide).css("background-image");
  $body.css("background-image", bgImage);
}

function setActiveSlide() {
  $slides.removeClass("active");
  $slides.eq(activeSlide).addClass("active");
}
