let counterValue = Number(document.querySelector('#value').textContent)
console.log(counterValue);

const btnDecrement = document.querySelector('button[data-action="decrement"]')

const clickMinus = () => {
    counterValue -= 1
    const value = document.querySelector('#value')
value.innerHTML = `<span>${counterValue}</span>`
    
}
btnDecrement.addEventListener("click", clickMinus)

const btnIncrement = document.querySelector('button[data-action="increment"]')

const clickPlus = () => {
    counterValue += 1
    const value = document.querySelector('#value')
value.innerHTML = `<span>${counterValue}</span>`
    
}
btnIncrement.addEventListener("click", clickPlus)

