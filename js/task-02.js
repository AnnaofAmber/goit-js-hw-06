const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
ingredients.forEach(function (item, index) {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.classList.add('item')
  list.append(listItem)
})