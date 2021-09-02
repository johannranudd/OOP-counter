function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Error, element does not exist, check ${selection}`);
    }
}

class Counter {
    constructor(element, value) {
        // console.log(element, value);
        this.value = value;
        this.counter = element;
        this.increaseBtn = element.querySelector('.increase');
        this.decreaseBtn = element.querySelector('.decrease');
        this.resetBtn = element.querySelector('.reset');
        this.valueDOM = element.querySelector(".value");

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
        this.increaseBtn.addEventListener("click", this.increase);
        this.decreaseBtn.addEventListener("click", this.decrease);
        this.resetBtn.addEventListener("click", this.reset);

        this.valueDOM.textContent = this.value;
    }
    increase() {
        this.value++;
        this.valueDOM.textContent = this.value;
    }
    decrease() {
        this.value--;
        this.valueDOM.textContent = this.value;
    }
    reset() {
        this.value = 0;
        this.valueDOM.textContent = this.value;
    }
}


const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

