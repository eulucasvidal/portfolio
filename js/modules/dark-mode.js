export default function initDarkMode() {
  const btnToggleMode = document.querySelector("#btn-dark-mode");

  btnToggleMode.addEventListener("change", (event) => {
    let modoDarkOn = document.body.classList.toggle("dark");

    if (modoDarkOn) {
      document.querySelector("#logo").src = "./img/logo/logo-mostarda.svg";

      document.querySelector("#faculdade").src ="./img/icones/faculdade-mostarda.svg";
      document.querySelector("#cursos").src ="./img/icones/cursos-mostarda.svg";
      document.querySelector("#idioma").src ="./img/icones/idioma-mostarda.svg";
      
      document.querySelector("#whats").src="./img/icones/whats-mostarda.svg";
      document.querySelector("#local").src="./img/icones/localizacao-mostarda.svg";
      document.querySelector("#email").src = "./img/icones/arroba-mostarda.svg";

      document.querySelector("#scrollingX").src ="./img/icones/scrollingX-mostarda.svg";
    } else {
      document.querySelector("#logo").src ="./img/logo/logo-amarelo.svg";

      document.querySelector("#faculdade").src ="./img/icones/faculdade-amarelo.svg";
      document.querySelector("#cursos").src ="./img/icones/cursos-amarelo.svg";
      document.querySelector("#idioma").src ="./img/icones/idioma-amarelo.svg";


      document.querySelector("#whats").src="./img/icones/whats-amarelo.svg";
      document.querySelector("#local").src="./img/icones/localizacao-amarelo.svg";
      document.querySelector("#email").src = "./img/icones/arroba-amarelo.svg";

      document.querySelector("#scrollingX").src ="./img/icones/scrollingX-amarelo.svg";
    }
  });
}
