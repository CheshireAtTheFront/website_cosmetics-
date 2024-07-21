const formSearch = () => {
  const searchForm = document.querySelector(".search-form");
  const linkShop = document.querySelectorAll(".link");

  searchForm.addEventListener("click", (e) => {
    e.preventDefault();
  });

  linkShop.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
};

export default formSearch;
