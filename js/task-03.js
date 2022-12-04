const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listImg = document.querySelector(".gallery");

// Adds an item to the end of the list
for (const image of images) {
  const lastItem = document.createElement("li");
  //lastItem.textContent = 'src= "' +  image.url + '"' + 'alt= "' +  image.alt + '"';
  //const image = document.createElement("img");
  //image.url = image.url;
  //image.alt = image.alt;
  lastItem.insertAdjacentHTML(
    "beforeend",
    "<img" +
      " " +
      'src= "' +
      image.url +
      '"' +
      'alt= "' +
      image.alt +
      '"' +
      "/>"
  );
  //lastItem.append(image);
  listImg.append(lastItem);
  //istImg.append(lastItem);

  //lastItem.textContent = "<img" + images[i] + ">";
}
