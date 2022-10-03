inputRange = document.querySelector(".slider__input");
// debugger;
inputRange.addEventListener("input", (event) => {
  console.log(event);
  // debugger;
  const target = event.target;
  target.style.backgroundImage = `
  linear-gradient(
    to right,
    var(--theme-lightcyan) 0%,
    var(--theme-lightcyan) ${target.valueAsNumber * 25}%,
    var(--theme-lightgreyblue) ${target.valueAsNumber * 25}%,
    var(--theme-lightgreyblue) 100%
  )
`;
});
