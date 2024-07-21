const rating = () => {
  const ratingItemsList = document.querySelectorAll(".rating__item");

  ratingItemsList.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentNode.dataset.totalValue = item.dataset.itemValue;
    });
  });
};

export default rating;
