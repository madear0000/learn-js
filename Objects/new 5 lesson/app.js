//думал что нет но потом прочитав понял что возможно

//2

function Calculator() {
    this.read = function() {
        this.first = prompt("first", "");
        this.second = prompt("second", "");
    };

    this.sum = function() {
        return +this.first + +this.second;
    }

    this.mul  = function() {
        return +this.first * +this.second;
    }

  }

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//3

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.newValue = prompt("new Value", "");
        startingValue += +this.newValue
        this.value = startingValue;
    };

}


let accumulator = new Accumulator(1); // начальное значение 1


accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений

