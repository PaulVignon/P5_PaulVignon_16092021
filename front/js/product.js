import { stocker, recuperer, ajouterAuPanier } from "./store.js";

//Récuperer l'identifiant
function getID() {
  return new URL(document.location.href).searchParams.get("id");
}

//Récuperer les données à partir de l'identifiant
function getDataFromId(id) {
  return fetch(`http://localhost:3000/api/products/${id}`)
    .then((res) => res.json())
    .then((promise) => {
      /*apiData = promise;*/
      return promise;
    });
}

//Affichage Rendue à partir des données
let colorsTemplate = document.querySelector("#eachArray");
let colorsSection = document.querySelector("#colorsSection");

function renderProduct(data) {
  document.querySelector("#imgPrdct").src = data.imageUrl;
  document.querySelector("#imgPrdct").alt = data.altTxt;
  document.querySelector("#title").textContent = data.name;
  document.querySelector("#price").textContent = data.price;
  document.querySelector("#description").textContent = data.description;

  const idForm = document.querySelector("#colors");

  const quantityForm = document.querySelector("#quantity");
  parseInt(quantityForm);

  console.log(idForm);

  const envoyerPanier = document.querySelector("#addToCart");

  envoyerPanier.addEventListener("click", (event) => {
    event.preventDefault();

    const formSelection = {
      ...data,
      color: idForm.value,
      quantity: +quantityForm.value,
    };

    console.log(formSelection);

    ajouterAuPanier(formSelection);
  });

  for (const eachColors of data.colors) {
    let newOption = document.createElement("option");
    newOption.textContent = eachColors;
    newOption.value = eachColors;
    document.querySelector("#colors").appendChild(newOption);
    //console.log(newOption);
  }

  /*let imgProduct = `<img src="${data.imageUrl}" alt="${data.altTxt}"></img>`;
  let nameProduct = `${data.name}`;
  let priceProduct = `${data.price}`;
  let descProduct = `${data.description}`;
  console.log(imgProduct);
  console.log(nameProduct);
  console.log(priceProduct);
  console.log(descProduct);*/
}

// Effectuer le rendue à partir de l'identifiant
const fetchData = async () => {
  let identifiant = getID();
  //console.log(identifiant);
  let data = await getDataFromId(identifiant);
  console.log(data);
  renderProduct(data);
};

fetchData();

console.log();
