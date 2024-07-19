//1
// function makeCounter() {
//     let count = 0;
  
//      return function counter() {
//         return count++
//     }

//     counter.set(value) {
//         count = value;
//     }

//     counter.decrease() {
//         count--;
//     }


// }

//2

function sum(a) {
    return function(...b) {
        return a + b;
    }
} //?