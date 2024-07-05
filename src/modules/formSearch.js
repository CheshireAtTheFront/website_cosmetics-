const formSearch = () => {
  const searchForm = document.querySelector(".search-form__text-field");

  searchForm.addEventListener("click", (e) => {
    e.preventDefault();
  });
};

export default formSearch;
