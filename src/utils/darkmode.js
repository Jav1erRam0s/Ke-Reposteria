import "../styles/common/darkMode.css";

export function darkMode() {
  const elem = document.getElementById("name-app");
  elem.classList.toggle("name-app-dark");

  const taghtml = document.querySelector("html");
  taghtml.classList.toggle("scroll-bar-dark");

  const containerPromo = document.getElementById("container-promos");
  containerPromo.classList.toggle("container-promos-dark");

  const containerPromoTitle = document.getElementById("container-promo-title");
  containerPromoTitle.classList.toggle("container-promo-title-dark");

}
