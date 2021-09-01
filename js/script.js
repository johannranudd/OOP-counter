// window.addEventListener("DOMContentLoaded", firstCounterVar)
// window.addEventListener("DOMContentLoaded", secondCounterVar)
const firstCounterVal = document.querySelector('.first-counter .value');
const secondCounterVal = document.querySelector('.second-counter .value');

function Counter(element, value) {
    // console.log(element, value);
    element.textContent = value;
}

window.addEventListener("DOMContentLoaded", function() {
    new Counter(firstCounterVal, 100)
    new Counter(secondCounterVal, 200)
})

