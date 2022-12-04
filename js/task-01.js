var ul = document.querySelector("#categories");
console.log(ul);
var liAnimals = document.querySelector(".item-A");
var liProducts = document.querySelector(".item-P");
var liTechnologies = document.querySelector(".item-T");
var animals = liAnimals.childNodes[3];
var products = liProducts.childNodes[3];
var technologies = liTechnologies.childNodes[3];
var liNodes = [];
var liNodesAnimals = [];
var liNodesProducts = [];
var liNodesTechnologies = [];
for (var i = 0; i < ul.childNodes.length; i++) {
  if (ul.childNodes[i].nodeName == "LI") {
    liNodes.push(ul.childNodes[i]);
  }
}

for (var i = 0; i < animals.childNodes.length; i++) {
  if (animals.childNodes[i].nodeName == "LI") {
    liNodesAnimals.push(animals.childNodes[i]);
  }
}

for (var i = 0; i < products.childNodes.length; i++) {
  if (products.childNodes[i].nodeName == "LI") {
    liNodesProducts.push(products.childNodes[i]);
  }
}

for (var i = 0; i < technologies.childNodes.length; i++) {
  if (technologies.childNodes[i].nodeName == "LI") {
    liNodesTechnologies.push(technologies.childNodes[i]);
  }
}

console.log(
  "Number of categories: " + liNodes.length,
  "\n",
  "Category: Animals",
  "\n",
  "Elements: " + liNodesAnimals.length,
  "\n",
  "Category: Products",
  "\n",
  "Elements: " + liNodesProducts.length,
  "\n",
  "Category: Technologies",
  "\n",
  "Elements: " + liNodesTechnologies.length
);
