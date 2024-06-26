const menu = () => {
  const body = document.querySelector("body");
  const menu = document.querySelector(".menu-side");

  // деллегирование
  body.addEventListener("click", (e) => {
    let target = e.target;

    if (
      target.closest(".block-user__icon_transform") ||
      target.classList.contains("menu-side__close")
    ) {
      menu.classList.toggle("menu-side_active");
    } else if (
      !target.matches(".menu-side__block") &&
      !target.matches("menu ul, li")
    ) {
      menu.classList.remove("menu-side_active");
    } else {
      menu.classList.add("menu-side_active");
    }
  });
};

export default menu;
