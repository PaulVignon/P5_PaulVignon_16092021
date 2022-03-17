import {
  stocker,
  recuperer,
  ajouterAuPanier,
  supprimerDuPanier,
  modifierDuPanier,
} from "./store.js";

ajouterAuPanier;

let template = document.querySelector("#cart__template");

let section = document.querySelector("#cart__items");

function renderProduct(data) {
  let clone = document.importNode(template.content, true);
  clone.querySelector("#cart__img").src = data.imageUrl;
  clone.querySelector("#cart__img").alt = data.altTxt;
  clone.querySelector("#cart__name").textContent = data.name;
  clone.querySelector("#cart__price").textContent = `${data.price.toFixed(
    2
  )} €`;
  clone.querySelector("#cart__color").textContent = data.color;
  clone.querySelector("#cart__quantity").value = data.quantity;
  clone.querySelector("#cart__delete").addEventListener("click", function () {
    supprimerDuPanier(data);
    renderAllProducts();
    console.log("blabla", data);
  });
  return clone;
}

async function renderAllProducts() {
  section.innerHTML = "";
  let descProduct = recuperer();
  for (const product of descProduct) {
    let renderedProduct = renderProduct(product);
    section.appendChild(renderedProduct);
  }
}

renderAllProducts();
