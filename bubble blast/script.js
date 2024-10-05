var timer = 30;
var score = 0;
var rnd = 0;

function makeBubbles() {
    var clutter = ""

    for(let i = 1; i <= 102; i++){
        var random = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${random}</div>`;
    }

    document.querySelector(".panel-bottom").innerHTML = clutter;
}

function runTimer(){    
    var timerInterval = setInterval(() => {
        if(timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }else {
            clearInterval(timerInterval);
            document.querySelector(".panel-bottom").innerHTML = `<h1>Game Over! <br />
            Your score: ${score}</h1>`;
        }
    }, 1000);
}

function getNewHit() {
    rnd = Math.floor(Math.random() * 10);
    document.querySelector("#hitValue").textContent = rnd;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreValue").textContent = score
}

document.querySelector("#restartBtn").addEventListener('click', () => {
    window.location.reload();
});

document.querySelector(".panel-bottom")
.addEventListener("click", function(details) {
    var clickedBubble = Number(details.target.textContent);
    if(rnd === clickedBubble) {
        increaseScore();
        makeBubbles();
        getNewHit();
    }else {
        makeBubbles();
        getNewHit();
    }
});

runTimer();
getNewHit();
makeBubbles();