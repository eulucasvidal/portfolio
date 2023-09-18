export default function initMenuMobile() {
  const botaoInterativo = document.querySelector('[data-menu="button"]');
  const menuMobile = document.querySelector('[data-menu="suave"]');

  function openMenu(event) {
    menuMobile.classList.toggle("active");
    botaoInterativo.classList.toggle("active");
  }

  botaoInterativo.addEventListener("click", openMenu);
}
