const slider = () => {
  const containerSlider = document.querySelector(".slider-container");
  const sliderTrack = document.querySelector(".slider-container__slider-track");
  const itemsSlider = document.querySelectorAll(".slider-container__block");
  // кнопки
  const arrowLeft = document.querySelector(".control__arrow-left");
  const arrowRight = document.querySelector(".control__arrow-right");
  // кол-во блоков
  const itemsCount = itemsSlider.length;
  // ширина каждого блока
  const itemWidth = containerSlider.clientWidth;
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
