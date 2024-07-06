const modal = () => {
  const openPopUp = document.querySelector(".block-user__link");
  const popup = document.querySelector(".popup");
  const popupBody = popup.querySelector(".popup__body");
  const popupBodyNone = popup.querySelector(".popup__body_none");
  // открывает модальное окно
  const openModal = () => {
    popup.style.display = "block";
  };
  // закрывает модальное окно
  const closeModal = (e) => {
    e.preventDefault();

    let target = e.target;

    if (target.matches(".popup__close") || !target.closest(".popup__body")) {
      popup.style.display = "none";
      popupBodyNone.classList.add("popup__body_none");
      popupBody.style.display = "flex";
    }
    // переход в зону регестрации
    if (target.matches(".popup__btn-register")) {
      popupBodyNone.classList.remove("popup__body_none");
      popupBody.style.display = "none";
    }
  };

  openPopUp.addEventListener("click", openModal);
  popup.addEventListener("click", closeModal);
};

export default modal;
