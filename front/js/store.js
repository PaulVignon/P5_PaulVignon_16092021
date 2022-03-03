export function stocker(formSelection) {
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
  //verifier si il existe deja dans le localStorage
  //mettre a jour ou ajouter
  //enregistrer dans le localStorage
  console.log(produit);
}
