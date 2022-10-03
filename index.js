views = [10000, 50000, 100000, 500000, 1000000];
prices = [8, 12, 16, 24, 36];

inputRange = document.querySelector(".slider__input");
inputRange.addEventListener("input", updateSlider);

function updateSlider() {
  option = inputRange.valueAsNumber;

  updateViews(views[option]);
  updatePrice(prices[option]);
  updateSliderBarColour();
}

function updateViews(viewCount) {
  const viewFormatter = Intl.NumberFormat("en", { notation: "compact" });
  viewsStr = viewFormatter.format(viewCount);
  document.querySelector(".calc__views").innerHTML = `${viewsStr} pageviews`;
}

function updatePrice(price) {
  const priceFormatter = Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  });
  priceStr = priceFormatter.format(price);
  document.querySelector(".calc__price").innerHTML = priceStr;
}

function updateSliderBarColour() {
  inputRange.style.backgroundImage = `
    linear-gradient(
      to right,
      var(--theme-lightcyan) 0%,
      var(--theme-lightcyan) ${inputRange.valueAsNumber * 25}%,
      var(--theme-lightgreyblue) ${inputRange.valueAsNumber * 25}%,
      var(--theme-lightgreyblue) 100%
    )
  `;
}
