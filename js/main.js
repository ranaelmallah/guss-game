let Again        = document.querySelector(".Again")
let check        = document.querySelector(".check")
let action       = document.querySelector(".action")
let number       = document.querySelector(".number")
let HighScoreNum = document.querySelector(".HighScore-num");
let Score        = document.querySelector(".score-num")
let inp          = document.querySelector(".name")

let secretNum = Math.trunc(Math.random() * 20) + 1
console.log(secretNum)
action.innerText = "start guessing..."
let score = 20;
let highScore = 0
Score.textContent = score
HighScoreNum.textContent = highScore

check.onclick = function () {
    let num = parseInt(inp.value)

    if (num > secretNum) {
        action.innerText = "Too high!"
        score--;
        Score.innerText = score
    } else if (num < secretNum) {
        action.innerText = "Too low!"
        score--;
        Score.innerText = score
    }
    if (score == 0) {
        action.innerText = "GAME OVER!"
        inp.setAttribute("disabled", "disabled")
        check.setAttribute("disabled", "disabled")
        document.body.style.backgroundColor = "red"
    }
    if (num == secretNum) {
        action.innerText = "Correct Number!"
        number.innerText = secretNum
        document.body.style.backgroundColor = "green"
        HighScoreNum.innerText = score
        inp.setAttribute("disabled", "disabled")
        check.setAttribute("disabled", "disabled")
        return;
    }
}
Again.onclick = function () {
    window.location.reload();
}
