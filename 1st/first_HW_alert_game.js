function step(num, answer, wrongResult) {
    let countStep = 1;

    while (answer !== num) {

        if (answer > num) {
            answer = parseInt(prompt(`Less than ${answer}`), 10);
            countStep++;
            wrongResult.push(answer);
        } else if (answer < num) {
            answer = parseInt(prompt(`More than ${answer}`), 10);
            countStep++;
            wrongResult.push(answer);
        }

    }
    alert(`Yes! Congrats!The number is ${answer}! You got it in ${countStep} step(s). With results: ${wrongResult}`);
    console.log(countStep);
    console.log(wrongResult);
}

function game() {
    const number = Math.ceil(Math.random() * 100);
    const answer = parseInt(prompt(`Enter number`), 10);
    let wrongResult = [answer, ];
    console.log(number);
    step(number, answer, wrongResult);
}

game();


/*
let Counter = 0;

function game() {
    const firstNum = getRandomValue(1, 1000);
    const secondNum = getRandomValue(1, 1000);
    const answer = prompt(`give right answer: ${firstNum}+ ${secondNum} = ?`);
    const rightAnswer = parseInt(firstNum + secondNum);
    const exapmle = `${firstNum} + ${secondNum}`;
    let history = [`${exapmle} = ${answer}`, ];

    function getRandomValue(min, max) {
        return Math.ceil(Math.random() * (max - min + 1)) + min;
    }
    console.log(rightAnswer);
    step(answer, rightAnswer, history, exapmle);
}

function step(answer, rightAnswer, history, exapmle) {
    let success = 1;
    let fail = 1;


    for (let i = history.length; i < 9;) {
        if (answer > rightAnswer) {
            answer = parseInt(prompt(`More than ${answer}. Check it again: ${exapmle} = ???`), 10);
            fail++;
            history.push(`${exapmle} = ${answer}(NOK)`);
        } else if (answer < rightAnswer) {
            answer = parseInt(prompt(`Less than ${answer}. Check it again: ${exapmle} = ???`), 10);
            fail++;
            history.push(`${exapmle} = ${answer}(NOK)`);
        } else {
            success++;
        }
        game(Counter);
    }
    alert(`Yes! Congrats!The number is ${answer}! You got it in ${fail} and ${success} step(s). With results: ${history}`);
}

game(Counter);
*/




function startGame() {
    const resultEl = createInterFace();
    const num = 10;

    function createInterFace() {
        const root = document.getElementById("root");
        const resultEl = document.createElement("div");
        const inputEl = document.createElement("input");
        const buttonEl = document.createElement('button');
        root.appendChild(resultEl);
        root.appendChild(inputEl);
        root.appendChild(buttonEl);
        resultEl.innerText = "Hello. please enter some number from 1 to 100";
        buttonEl.innerText = "Go";

        buttonEl.addEventListener("click", () => {
            checkResult(inputEl.value);
        })

        return resultEl;
    }
}

function checkResult(answer) {
    const numAnswer = Number(answer);
    if (isNaN(numAnswer)) {
        resultEl.innerText = "Please enter a number";
    } else if (numAnswer > num) {
        resultEl.innerText = `Less than ${numAnswer}`;
    } else if (numAnswer < num) {
        resultEl.innerText = `More than ${numAnswer}`;
    } else {
        resultEl.innerText = "Exactly";
    }
}



//StartGame();