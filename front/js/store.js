export function stocker(panier) {
  const formJSON = JSON.stringify(panier);
  console.log(formJSON);

  localStorage.setItem("produit", formJSON);
}
export function recuperer() {
  let productForm = localStorage.getItem("produit");

  const parseJSON = JSON.parse(productForm);

  if (!parseJSON) return [];
  else return parseJSON;
}
export function ajouterAuPanier(produit) {
  //recuperer contenue du localStorage
  let panier = recuperer();
  console.log(produit);

  //verifier si il existe deja dans le panier
  let item = panier.find(
    (item) => item._id === produit._id && produit.color === item.color
  );

  if (item) {
    // mise a jour : ajouter le nombre de canapé suplémentaire
    item.quantity += produit.quantity;
  } else {
    // ajout : voir comment ajouter au panier
    panier.push(produit);
  }

  //enregistrer dans le localStorage
  stocker(panier);
}

export function supprimerDuPanier(produit) {
  let panier = recuperer();
  console.log(produit);

  //verifier si il existe deja dans le panier
  let index = panier.findIndex(
    (item) => item._id === produit._id && produit.color === item.color
  );

  panier.splice(index, 1);

  //enregistrer dans le localStorage
  stocker(panier);
}

export function modifierDuPanier(produit) {
  //recuperer contenue du localStorage
  let panier = recuperer();
  console.log(produit);

  //verifier si il existe deja dans le panier
  let index = panier.findIndex(
    (item) => item._id === produit._id && produit.color === item.color
  );

  panier[index] = produit;

  //enregistrer dans le localStorage
  stocker(panier);
}
