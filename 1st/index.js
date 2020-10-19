const startScene = document.getElementById("start");
const gameScene = document.getElementById("game");
const finalScene = document.getElementById("final");

const startBtn = document.querySelector("#start-button");
const restartBtn = document.querySelector("#restart-button");
const exit = document.getElementById("exit");
const confirmBtn = document.getElementById("confirm");
const cancelBtn = document.getElementById("cancel");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");


function startGame(scene) {
    const num = Math.ceil(Math.random() * 100);
    const count = 0;
    let movesCount = 0;
    let minimum = 1;
    let maximum = 100;

    const form = scene.querySelector("#form");
    const input = form.querySelector("select");
    const lesstField = scene.querySelector("#less");
    const moreField = scene.querySelector("#more");
    const movesField = scene.querySelector("#moves");

    console.log(num);

    buildSelect(input, minimum, maximum);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let value = Number(input.value);
        input.value = "";
        input.focus();
        movesCount++;
        movesField.innerText = movesCount;

        if (value > num) {
            lesstField.innerText = value;
            maximum = value - 1;
            buildSelect(input, minimum, maximum);
        } else if (value < num) {
            moreField.innerText = value;
            minimum = value + 1;
            buildSelect(input, minimum, maximum);
        } else if (value == num) {
            showFinalScene(num, movesCount);
        }
    })
}

startBtn.addEventListener("click", () => {
    startScene.style.display = "none";
    gameScene.style.display = "block";
    exit.style.display = "block";
    startGame(gameScene);
})


function buildSelect(select, min, max) {
    select.innerHTML = "";
    for (let i = min; i <= max; i++) {
        const opt = document.createElement("option");
        opt.innerText = i;
        select.appendChild(opt);
    }

}

function showFinalScene(result, movesCount) {
    gameScene.style.display = "none";
    finalScene.style.display = "block";
    const resultField = finalScene.querySelector(".congrats span");
    const movesField = finalScene.querySelector("span .moves");
    resultField.innerText = result;
    movesField.innerText = movesCount;
}

restartBtn.addEventListener("click", () => {
    startScene.style.display = "none";
    finalScene.style.display = "none";
    gameScene.style.display = "block";
    exit.style.display = "block";
    startGame(gameScene);
})

exit.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.style.display = "block";
    exit.style.display = "none";
})

confirmBtn.addEventListener("click", () => {
    startScene.style.display = "block";
    gameScene.style.display = "none";
    finalScene.style.display = "none";
    exit.style.display = "none";
    popup.style.display = "none";
    overlay.style.display = "none";
    startGame(gameScene);
})

cancelBtn.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
    exit.style.display = "block";
})