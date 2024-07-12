//1 ошибка

//2
let calculator = {
    read() {
        this.a = prompt("first", "");
        this.b = prompt("second", "");
    },

    sum() {
        return +this.a + +this.b;
    },

    mul() {
        return +this.a * +this.b;
    }
};
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

//3 надо будет спросить

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
