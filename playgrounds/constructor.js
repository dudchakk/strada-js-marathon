// 2

function Calculator()
{
    this.read = function() {
        this.a = +prompt("First value?", '0');
        this.b = +prompt("Second value?", '0');
    }

    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// 3

function Accumulator(startValue)
{
    this.value = startValue;

    this.read = function() {
        this.value += +prompt("Value?", '0');
    }
}

let accumulator = new Accumulator(1); // початкове значення 1

accumulator.read(); // додає введене користувачем значення
accumulator.read(); // додає введене користувачем значення

alert(accumulator.value);