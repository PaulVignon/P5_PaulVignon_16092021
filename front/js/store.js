export function stocker(panier) {
  const formJSON = JSON.stringify(formSelection);
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
