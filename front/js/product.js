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
function renderProduct(data) {
  document.querySelector("#imgPrdct").src = data.imageUrl;
  document.querySelector("#imgPrdct").alt = data.altTxt;
  document.querySelector("#title").textContent = data.name;
  document.querySelector("#price").textContent = data.price;
  document.querySelector("#description").textContent = data.description;
  let newOption = document.createElement("option");
  newOption.textContent = data.colors;
  newOption.value = "0";
  document.querySelector("#colors").appendChild(newOption);

  /*let imgProduct = `<img src="${data.imageUrl}" alt="${data.altTxt}"></img>`;
  let nameProduct = `${data.name}`;
  let priceProduct = `${data.price}`;
  let descProduct = `${data.description}`;
  console.log(imgProduct);
  console.log(nameProduct);
  console.log(priceProduct);
  console.log(descProduct);*/
}

renderAllProducts();
// Effectuer le rendue à partir de l'identifiant
const fetchData = async () => {
  let identifiant = getID();
  console.log(identifiant);
  let data = await getDataFromId(identifiant);
  console.log(data);
  renderProduct(data);
};

async function renderAllProducts() {
  let descProduct = await getProducts();
  for (const product of descProduct) {
    let renderedProduct = renderProduct(product);
    section.appendChild(renderedProduct);
  }
}

fetchData();

console.log();
