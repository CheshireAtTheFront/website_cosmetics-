const scroll = () => {
  const anchors = document.querySelectorAll("a.menu__link");

  for (let anchor of anchors) {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      // найти атрибут href
      const linkAttribute = anchor.getAttribute("href");
      // достать элементы с атрибутом href и повесть метод scrollIntoView
      document.querySelector(linkAttribute).scrollIntoView({
        // тип анимации
        behavior: "smooth",
        // в какое место нужно переместится
        block: "end",
      });
    });
  }
};

export default scroll;
