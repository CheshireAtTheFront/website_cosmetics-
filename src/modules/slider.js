const slider = () => {
  const bodySlider = document.querySelector(".about-us__slider-body");
  const sliderTrack = document.querySelector(".about-us__slider-track");
  const itemsSlider = document.querySelectorAll(".about-us__slide");
  // кнопки
  const arrowLeft = document.querySelector("#btn-left");
  const arrowRight = document.querySelector("#btn-right");
  // кол-во блоков
  const itemsCount = itemsSlider.length;
  // ширина каждого блока
  const itemWidth = bodySlider.clientWidth;
  // на сколько нужно проскролить блок
  const movePosition = itemWidth;
  // для определения позиции слайда при скроле
  let position = 0;

  // скрол слайда на нужную позицию
  const setPosition = () => {
    sliderTrack.style.transform = `translateX(${position}px)`;
  };

  arrowLeft.addEventListener("click", () => {
    // изменения перемещения позиции
    position += movePosition;
    setPosition();
    checkBtns();
  });

  arrowRight.addEventListener("click", () => {
    position -= movePosition;
    setPosition();
    checkBtns();
  });

  // активность кнопок
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
