function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector('input')

const btnCreate = document.querySelector('button[data-create]')
const boxes = document.querySelector('#boxes')
let box
function createBoxes(amount) {
  const arr = []
  amount = Number(input.value)
  for (let i = amount; i>=1; i -= 1){
    const number = i
    arr.push(number)
  }

  arr.forEach(function (item, index) {
    box = document.createElement('div')
    boxes.append(box)
    box.style.width = `30px`;
    box.style.height = `30px`;
    box.style.backgroundColor = getRandomHexColor()
    box.classList.add('box')
      
    
  //   for (let i = 0; i <= 3; i += 1) {
  //   console.log(i);
  //   let val = 30;
  //   val[i] += 10
  //   console.log(val);
  //   console.log(i);
  //     box.style.width = `${val}px`;
  //     box.style.height = `${val}px`;
  //   }
    
  })
  
}

btnCreate.addEventListener('click', createBoxes)



const btnDestroy = document.querySelector('button[data-destroy]')

function destroyBoxes() {

  const removeBox = document.querySelector(".box");
  removeBox.remove()

  }
btnDestroy.addEventListener('click', destroyBoxes)

 