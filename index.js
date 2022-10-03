views = [10000, 50000, 100000, 500000, 1000000];
prices = [8, 12, 16, 24, 36];
discount = 0.25;

inputRange = document.querySelector(".slider__input");
inputDiscount = document.querySelector(".switch__checkbox");
inputRange.addEventListener("input", updateSlider);
inputDiscount.addEventListener("input", updatePrice);

function updateSlider() {
  updateViews();
  updatePrice();
  updateSliderBarColour();
}

function updateViews() {
  option = inputRange.valueAsNumber;

  const viewFormatter = Intl.NumberFormat("en", { notation: "compact" });
  viewsStr = viewFormatter.format(views[option]);
  document.querySelector(".calc__views").innerHTML = `${viewsStr} pageviews`;
}

function updatePrice() {
  option = inputRange.valueAsNumber;

  // Calculate the price including discounts
  price = prices[option];
  if (inputDiscount.checked) {
    price *= 1 - discount;
  }

  // Format the output to display on the screen
  const priceFormatter = Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  });
  priceStr = priceFormatter.format(price);

  // Print output to document
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
