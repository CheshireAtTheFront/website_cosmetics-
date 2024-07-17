const formSearch = () => {
  const searchForm = document.querySelector(".search-form__btn");

  searchForm.addEventListener("click", (e) => {
    e.preventDefault();
  });
};

export default formSearch;
