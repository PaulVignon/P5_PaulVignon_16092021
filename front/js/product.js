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
  let imgProduct = `<img src="${data.imageUrl}" alt="${data.altTxt}"></img>`;
  let nameProduct = `${data.name}`;
  let priceProduct = `${data.price}`;
  let descProduct = `${data.description}`;
  console.log(imgProduct);
  console.log(nameProduct);
  console.log(priceProduct);
  console.log(descProduct);
}
// Effectuer le rendue à partir de l'identifiant
const fetchData = async () => {
  let identifiant = getID();
  let data = await getDataFromId(identifiant);
  console.log(data);
  renderProduct(data);
};

fetchData();
