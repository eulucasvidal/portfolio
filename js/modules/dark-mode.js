export default function initDarkMode() {
const btnToggleMode = document.querySelector("#btn-dark-mode");

btnToggleMode.addEventListener("change", (event) => {
  document.body.classList.toggle("dark");
});
}