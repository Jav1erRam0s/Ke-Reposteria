import "../styles/common/darkMode.css";

export function darkMode() {
  const elem = document.getElementById("name-app");
  elem.classList.toggle("name-app-dark");

  const taghtml = document.querySelector("html");
  taghtml.classList.toggle("scroll-bar-dark");

  const presentacion = document.getElementById("presentacion-txt-info");
  presentacion.classList.toggle("presentacion-txt-dark");

  /* Promos */

  const containerPromo = document.getElementById("container-promos");
  containerPromo.classList.toggle("container-promos-dark");

  const containerPromoTitle = document.getElementById("container-promo-title");
  containerPromoTitle.classList.toggle("container-promo-title-dark");

  [].slice.call(document.getElementsByClassName("card-promo")).forEach(cardPromo => {
    cardPromo.classList.toggle("card-promo-dark");
  });

  [].slice.call(document.getElementsByClassName("card-promo-titulo")).forEach(cardPromoTitulo => {
    cardPromoTitulo.classList.toggle("card-promo-titulo-dark");
  });

  /* Productos */

  const containerProducto = document.getElementById("container-productos");
  containerProducto.classList.toggle("container-producto-dark");

  const containerProductoTitle = document.getElementById("container-producto-title");
  containerProductoTitle.classList.toggle("container-producto-title-dark");

  [].slice.call(document.getElementsByClassName("card-producto")).forEach(cardProducto => {
    cardProducto.classList.toggle("card-producto-dark");
  });

  [].slice.call(document.getElementsByClassName("card-producto-titulo")).forEach(cardProductoTitulo => {
    cardProductoTitulo.classList.toggle("card-producto-titulo-dark");
  });
  
  /* Paginacion */

  [].slice.call(document.getElementsByClassName("page-link")).forEach(paginationButton => {
    paginationButton.classList.toggle("paginacion-button-dark");
  });

}
