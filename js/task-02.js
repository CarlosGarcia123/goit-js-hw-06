const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

// Adds an item to the end of the list
for (let i = 0; i < ingredients.length; i++) {
  const lastItem = document.createElement("li");
  lastItem.textContent = ingredients[i];
  list.append(lastItem);
}
