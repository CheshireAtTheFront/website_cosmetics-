const scroll = () => {
  const anchors = document.querySelectorAll("a.menu__link");

  for (let anchor of anchors) {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const linkAttribute = anchor.getAttribute("href");
      document.querySelector(linkAttribute).scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    });
  }
};

export default scroll;
