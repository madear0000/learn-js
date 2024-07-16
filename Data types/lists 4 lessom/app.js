//1   4

//2
let styles = ['Джах', 'Блюз']
styles.push("Рок-н-ролл");
styles[1] = "Классика";
alert(styles[0]);
styles.shift();
styles.unshift("Рэп", "Рэгги");
console.log(styles);

//3


function sumInput() {
    let inputLst = [];
    while (true) {
        let nuber = prompt("number", "")
        if (isNaN(nuber)) {
            var sum = 0;
            inputLst.forEach(function(num) {
                sum += +num;
            });
            alert(sum);
            break
        } else {
            inputLst.push(nuber);
        }
    }  
}

//4

function getMaxSubSum(arr) {
    let sum = 0;
    let max = 0;

    for (let key of arr) {
        sum += key;
        max = Math.max(sum, max);
        if (sum <= 0) {
            sum = 0;
        }
    }
}


 