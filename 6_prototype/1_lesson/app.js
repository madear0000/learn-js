// 1 {
//     1.true
//     2.null
//     3.undefinded
// }

//2

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};
  
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
  
let pockets = {
    money: 2000,
    __proto__: bed
};

//ну различия наверное есть слгка во времени но это настолько незначительно что можно и не учитывать а в целом одинаково и по записи и по времени и по ресурсам компьютера

//3 rabbit

//4

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
};
  
let speedy = {
    stomach: [],

    __proto__: hamster
};
  
let lazy = {
    stomach: [],

    __proto__: hamster
};
  
  // Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple

