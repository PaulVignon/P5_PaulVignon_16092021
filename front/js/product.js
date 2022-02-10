let identifiant = "107fb5b75607497b96722bda5b504926";

let templateTitle = document.querySelector("#h1title");

function fetch_id(data) {
  let clone = document.importNode(templateTitle.content, true);
  clone.querySelector("#title").textContent = data.name;
}

//Récuperer l'identifiant
function getID() {
  return identifiant;
}

function renderProduct() {
  let _idProduct = await getID();
  for (const product of _idProduct) {
    let renderedProduct = fetch_id(product);
    section.appendChild(renderedProduct);
  }
}

//Récuperer les données à partir de l'identifiant
function getDataFromId(id) {
  fetch(`http://localhost:3000/api/products/${id}`);
}

//Affichage Rendue à partir des données
function name(params) {}

// Effectuer le rendue à partir de l'identifiant
function name(params) {}
