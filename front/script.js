let template = document.querySelector("#articleKanap");

let section = document.querySelector("#items");

if ("content" in document.createElement("template")) {
  function renderProduct(data) {
    let clone = document.importNode(template.content, true);
    clone.querySelector("#imagesKanap").src = data.imageUrl;
    clone.querySelector("#imagesKanap").alt = data.altTxt;
    clone.querySelector(".productName").textContent = data.name;
    clone.querySelector(".productDescription").textContent = data.description;

    return clone;
  }
} else {
  section.innerHTML = "Votre navigateur n'est pas supporté";
}

async function getProducts() {
  const a = await fetch("http://localhost:3000/api/products/");
  let renderObjects = await a.json();
  return renderObjects;
}

async function renderProducts() {
  let descProduct = await getProducts();
  for (const product of descProduct) {
    let renderedProduct = renderProduct(product);
    section.appendChild(renderedProduct);
  }
}

renderProducts();
