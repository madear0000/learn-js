//1
function spy(func) {

    history.calls = [];

    function history(...args) {
        history.calls.push(args);

    }

    return history;
}
  

//2

function f(x) {
    alert(x);
  }

function delay(func, ms) {

    function time() {
        setTimeout(() => func.apply(this, arguments), ms);
    }

    return time;
}
  
//3

function debounce(func, ms) {
    function time() {
        setTimeout(() => func.apply(this, arguments), ms);
    }
}