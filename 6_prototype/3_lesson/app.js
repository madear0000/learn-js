//1
Function.prototype.defer = function(msw) {
    setTimeout(this, ms);
}

function f() {
    alert("Hello!");
}
  
f.defer(1000); // выведет "Hello!" через 1 секунду

//2

Function.prototype.defer = function(msw) {
    let func = this;
    return function(...args) {
        setTimeout(() => func.apply(this, args), ms);
    }
}

function f(a, b) {
    alert( a + b );
}
  
f.defer(1000)(1, 2); // выведет 3 через 1 секунду.