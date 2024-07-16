const rating = () => {
  const ratingItemsList = document.querySelectorAll(".rating__item");

  ratingItemsList.forEach((item) => {
    item.addEventListener("click", () => {
      // обращаемся к дата атрибуту у родителя
      // ему присваивается значение item дата атрибута
      item.parentNode.dataset.totalValue = item.dataset.itemValue;
    });
  });
};

export default rating;
