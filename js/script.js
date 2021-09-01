
// const firstCounterVal = document.querySelector('.first-counter');
// const secondCounterVal = document.querySelector('.second-counter .value');

function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`please check "${selection}" selector, no such element exists`)
    }
}

function Counter(element, value) {
    // console.log(element, value);
    // element.children[1].textContent = value;
    this.value = value;
    this.counter = element;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');    
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;

    this.resetBtn.addEventListener("click", function() {
        firstCounter.reset();
    })
}

Counter.prototype.increase = function() {
    this.value++;
    this.valueDOM.textContent = this.value;
}
Counter.prototype.decrease = function() {
    this.value--;
    this.valueDOM.textContent = this.value;
}
Counter.prototype.reset = function() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
}

const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)


