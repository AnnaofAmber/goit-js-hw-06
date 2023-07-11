function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());

console.log(getRandomHexColor);
const btn = document.querySelector('.change-color')

const handleClick = () => {
  const body = document.querySelector('body')
  const color = document.querySelector('.color')
  const func = getRandomHexColor()
  body.style.backgroundColor = func
  color.textContent = func

} 

btn.addEventListener('click', handleClick)

console.log(handleClick);