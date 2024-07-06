const form = () => {
  console.log("form");
  const form = document.querySelector(".search-form__text-field");

  form.addEventListener("click", (e) => {
    e.preventDefault();
  });
};

export default form;
