const slider = () => {
  const bodySlider = document.querySelector(".about-us__slider-body");
  const sliderTrack = document.querySelector(".about-us__slider-track");
  const itemsSlider = document.querySelectorAll(".about-us__slide");
  const arrowLeft = document.querySelector("#btn-left");
  const arrowRight = document.querySelector("#btn-right");
  const itemsCount = itemsSlider.length;
  const itemWidth = bodySlider.clientWidth;
  const movePosition = itemWidth;

  let position = 0;

  const setPosition = () => {
    sliderTrack.style.transform = `translateX(${position}px)`;
  };

  arrowLeft.addEventListener("click", () => {
    position += movePosition;
    setPosition();
    checkBtns();
  });

  arrowRight.addEventListener("click", () => {
    position -= movePosition;
    setPosition();
    checkBtns();
  });

  const checkBtns = () => {
    if (position === 0) {
      arrowLeft.style.opacity = 0.5;
      arrowLeft.disabled = true;
    } else if (position <= -(itemsCount - 1) * itemWidth) {
      arrowRight.style.opacity = 0.5;
      arrowRight.disabled = true;
    } else {
      arrowLeft.style.opacity = 1;
      arrowLeft.disabled = false;
      arrowRight.style.opacity = 1;
      arrowRight.disabled = false;
    }
  };

  checkBtns();
};

export default slider;
