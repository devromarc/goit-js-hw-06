const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];






const ingredientsList = document.querySelector('#ingredients');


for(const ingredient of ingredients){
  // Will create a separate <li> element. Be sure to use the document.createElement() method.
  const listItem = document.createElement('li');
  // Will add the item class to the element.
  listItem.classList.add('item');
  // Will add the ingredient name as its text content.
  listItem.textContent = ingredient;
  // Then will insert all <li> to the ul#ingredients list in a single operation.
  ingredientsList.append(listItem)
}