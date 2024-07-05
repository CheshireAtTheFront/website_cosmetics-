const modal = () => {
  const openPopUp = document.querySelector(".block-user__link");
  const popup = document.querySelector(".popup");

  const openModal = () => {
    popup.style.display = "block";
  };

  const closeModal = (e) => {
    let target = e.target;

    if (target.matches(".popup__close") || !target.closest(".popup__body")) {
      popup.style.display = "none";
    }
  };

  openPopUp.addEventListener("click", openModal);
  popup.addEventListener("click", closeModal);
};

export default modal;
