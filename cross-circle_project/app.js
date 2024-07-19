let BLOCKS = document.querySelectorAll('.block');
let who = "stepCross";
let printStep = document.getElementById('steps');
const buttonStart = document.getElementById('but');
let flagToGame = true;
const crossWin = document.getElementById('cr');
const circleWin = document.getElementById('ci');
const winGame = [
    [0, 1, 2],
    [0, 4, 8],
    [3, 4, 5],
    [2, 5, 8],
    [1, 4, 7],
    [6, 7, 8],
    [0, 3, 6],
    [2, 4, 6]
];

function whoWin() {
    for (let winnerPos of winGame) {
        if (BLOCKS[winnerPos[0]].classList.contains("circle") && BLOCKS[winnerPos[1]].classList.contains("circle") && BLOCKS[winnerPos[2]].classList.contains("circle")) {
            flagToGame = false;
            circleWin.style.opacity = "1";
        } else if (BLOCKS[winnerPos[0]].classList.contains("cross") && BLOCKS[winnerPos[1]].classList.contains("cross") && BLOCKS[winnerPos[2]].classList.contains("cross")) {
            flagToGame = false;
            crossWin.style.opacity = "1";
        }
    }
}




function whoStep() {
    if (who == "stepCross") {
        who = "stepCircle";
        printStep.textContent = "Нолики";
    } else {
        who = "stepCross"
        printStep.textContent = "Крестики";
    }
}

printStep.textContent = "Крестики";

BLOCKS.forEach((oneBlock) => {
    oneBlock.addEventListener('click', ()=> {
        if (who == "stepCross" && !oneBlock.classList.contains('cross') && !oneBlock.classList.contains('circle') && flagToGame) {
            oneBlock.classList.add('cross');
            whoStep();
            whoWin();
        } else if (who == "stepCircle" && !oneBlock.classList.contains('cross') && !oneBlock.classList.contains('circle') && flagToGame) {
            oneBlock.classList.add('circle');
            whoStep(); 
            whoWin();
        }
    })
})

buttonStart.addEventListener('click', () => {
    BLOCKS.forEach((oneBlock) => {
        oneBlock.classList.remove('cross');
        oneBlock.classList.remove('circle');
        who = "stepCross";
        printStep.textContent = "Крестики";
        flagToGame = true;
        circleWin.style.opacity = "0";
        crossWin.style.opacity = "0";
    })
})

