//1
function sumTo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo(n - 1);
    }
}

//2

function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//3

function fib(n) { 
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

//4
function printList(list) {
    alert(list.value);
    if (list.next) {
        printList(list.next);
    }
}

//5

function reverse(list) {
    if (list.next) {
        printList(list.next);
    }
    alert(list.value);
}