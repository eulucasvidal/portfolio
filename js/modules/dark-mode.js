export default function initDarkMode() {
  const btnToggleMode = document.querySelector("#btn-dark-mode");

  btnToggleMode.addEventListener("change", (event) => {
    let modoDarkOn = document.body.classList.toggle("dark");

    if (modoDarkOn) {
      document.querySelector("#logo").src = "./img/logo/logo-mostarda.svg";
      document.querySelector("#email").src = "./img/redes/email-mostarda.svg";
      document.querySelector("#github").src = "./img/redes/github-mostarda.svg";
      document.querySelector("#instagram").src =
        "/img/redes/instagram-mostarda.svg";
      document.querySelector("#linkedin").src =
        "/img/redes/linkedin-mostarda.svg";
    } else {
      document.querySelector("#logo").src = "./img/logo/logo-amarelo.svg";
      document.querySelector("#email").src = "./img/redes/email-amarelo.svg";
      document.querySelector("#github").src = "./img/redes/github-amarelo.svg";
      document.querySelector("#instagram").src =
        "/img/redes/instagram-amarelo.svg";
      document.querySelector("#linkedin").src =
        "/img/redes/linkedin-amarelo.svg";
    }
  });
}
