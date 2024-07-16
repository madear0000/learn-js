//1

function up(st) {
    let newWord = '';
    for (let i = 0; i < st.length; i++) {
        if (i == 0) {
            newWord += st[i].toUpperCase()
        } else {
            newWord += st[i]
        }
    }
    alert(newWord);
}

//2

function checkSpam(word) {
    return word.toUpperCase().includes('viagra') || word.toUpperCase().includes('xxx')
}

//3



function truncate(str, maxlength) {
    let maxWord = '';
    if (str.length > maxlength) {
        for (let i = 0; i < maxlength - 1; i++) {
            maxWord += str[i];
        }
        return maxWord + "...";
    } else {
        return str;
    }
}

//4

function extractCurrencyValue(str) {
    return +str.slice(1);
}