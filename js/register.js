const focusRange = document.querySelector("#focus-level");
const focusValue = document.querySelector("#focus-value");

focusRange.addEventListener("input", () => {
  focusValue.textContent = focusRange.value;
});
