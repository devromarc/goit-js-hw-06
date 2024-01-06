const listOfCateg = document.querySelectorAll(".item");

console.log("Number of categories: " ,listOfCateg.length);

listOfCateg.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log("Elements: " , item.lastElementChild.children.length);
});