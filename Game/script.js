const startButton = document.getElementById('startButton');
const gameArea = document.getElementById('gameArea');

function startGame() {
    startButton.style.display = 'none';
    gameArea.style.display = 'block';
    console.log("Game has started!");
}
startButton.addEventListener('click', startGame);

const scoreElement = document.querySelector('.score');
let score = 0;
let activeRat = null;
let gameInterval;
let isClicked = false;
let isWelcomeShown = false; 

function showRandomRat() {
    if (activeRat) {
        activeRat.style.display = 'none';
    }

    const rats = document.querySelectorAll('.rat');
    const randomIndex = Math.floor(Math.random() * rats.length);
    activeRat = rats[randomIndex];
    activeRat.style.display = 'block';
    isClicked = false;


}
function startGame() {
    clearInterval(gameInterval);
    score = 0;
    scoreElement.textContent = score;

    gameInterval = setInterval(showRandomRat, 1000);
}

document.querySelectorAll('.rat').forEach(rat => {
    rat.addEventListener('click', () => {
        if (!isClicked) {
            isClicked = true;
            score += 1;
            scoreElement.textContent = score;
            rat.style.display = 'none';
            alert(`Congratulations! Score: +1`);
        }
    });
});

document.getElementById("startButton").addEventListener("click", function () {
    if (!isWelcomeShown) { 
        alert("Welcome to the Game!");
        isWelcomeShown = true; 
    }
    startGame();
});

window.addEventListener('load', startGame);

