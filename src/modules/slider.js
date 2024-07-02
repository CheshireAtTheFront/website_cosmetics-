const slider = () => {
  const containerSlider = document.querySelector(".slider-container");
  const sliderTrack = document.querySelector(".slider-container__slider-track");
  const blockSlider = document.querySelectorAll(".slider-container__block");
  // кнопки
  const arrowLeft = document.querySelector(".control__arrow-left");
  const arrowRight = document.querySelector(".control__arrow-right");
  // сколько элементов показывать
  const slidesToShow = 1;
  // сколько элементов будет проскроливаться
  const slidesToScroll = 1;
  // кол-во блоков
  const itemsCount = blockSlider.length;
  // ширина каждого блока
  const blockWidth = containerSlider.offsetWidth / slidesToShow;
  // на сколько нужно проскролить блок
  const movePosition = slidesToScroll * blockWidth;

  // для определения позиции слайда при скроле
  let position = 0;

  blockSlider.forEach((item) => {
    item.style.minWidth = `${blockWidth}px`;
  });

  // всплытие дл стрелочной функции происходит если она вызывается в addEventListener
  const setPosition = () => {
    sliderTrack.style.transform = `translateX(${position}px)`;
  };

  arrowLeft.addEventListener("click", () => {
    // изменения перемещения позиции
    counter--;
    position += movePosition;
    setPosition();
    checkBtns();
  });

  arrowRight.addEventListener("click", () => {
    counter++;
    position -= movePosition;
    setPosition();
    checkBtns();
  });

  // активность кнопок
  const checkBtns = () => {
    if (position === 0) {
      arrowLeft.style.opacity = 0.5;
      arrowLeft.disabled = true;
    } else if (position <= -(itemsCount - slidesToShow) * blockWidth) {
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
