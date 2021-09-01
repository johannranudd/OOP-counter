// window.addEventListener("DOMContentLoaded", firstCounterVar)
// window.addEventListener("DOMContentLoaded", secondCounterVar)
const firstCounter = document.querySelector('.first-counter .value');
const secondCounter = document.querySelector('.second-counter .value');

function Counter(element, value) {
    // console.log(element, value);
    element.textContent = value;
}


const firstCounterVar = new Counter(firstCounter, 100)
const secondCounterVar = new Counter(secondCounter, 200)

