//1

function sumSalaries(salaries) {
    let sum = 0;
    for (let val of Object.values(salaries)) {
        sum += val;
    }
    return sum;
}

//2

function count(obj) {
    let c = 0;
    for (let key of Object.keys(obj)) {
        c += 1;
    }
    return c;
}