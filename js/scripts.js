//Business Logic for Game

let game = new Game();

function Game() {
    this.players = {};
    this.currentId = 0;
    this.roll = 0;
    this.counter = 1;
}

Game.prototype.updateRollScore = function(newRoll) {
    this.roll += newRoll;
};

Game.prototype.addPlayer = function(player) {
    player.id = this.assignId();
    this.players[player.id] = player;
}

Game.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

//Business Logic for Players

function Player(name) {
    this.name = name;
    this.score = 0;
}

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

function rollDice() {
    return getRandomNumber(1, 6);
}

function playerTurn() {
    if (rollDice() !== 1) {
        Player.score ++
    }
    if (rollDice() === 1) {
        Player.score + 0
    }
}

function startGame(e) {
    e.preventDefault();
    let playerName = document.querySelector("#player1").value
    let playerName2 = document.querySelector("#player2").value
    document.getElementById("player1Name").innerText = playerName;
    document.getElementById("player2Name").innerText = playerName2;
    let newPlayer = new Player(playerName);
    let newPlayer2 = new Player(playerName2);
    game.addPlayer(newPlayer);
    game.addPlayer(newPlayer2);
    document.getElementById("startGame").classList.add('hidden');
    highlightPlayer();
}

function calculateScore() {
    let currentTotal = document.getElementById("turnTotalSum");
    if (game.counter === 1) {
       game.players["1"].score += parseInt(currentTotal.innerText);
    } else {
        game.players["2"].score += parseInt(currentTotal.innerText);
    }
    switchPlayer();
    displayScore();
    highlightPlayer();
    currentTotal.innerText = 0;
    game.roll = 0;

}

function highlightPlayer() {
    if (game.counter === 1) {
        document.getElementById("player1Name").classList.add("bg-warning");
        document.getElementById("player2Name").classList.remove("bg-warning");
    } else {
        document.getElementById("player2Name").classList.add("bg-warning");
        document.getElementById("player1Name").classList.remove("bg-warning");
    }

}

function displayScore() {
    let player1Score = document.getElementById("player1Score");
    let player2Score = document.getElementById("player2Score");
    player1Score.innerText = game.players["1"].score;
    player2Score.innerText = game.players["2"].score;
}


function switchPlayer() {
    if (game.counter === 1) {
        game.counter = 2;

    } else {
        game.counter = 1;
    }
    highlightPlayer();
}
//UI Logic

//game end function

function handleDiceRoll(e) {
    e.preventDefault;
    let newRoll = rollDice();
    document.querySelector("#currentRoll").innerText = newRoll;
    if (newRoll === 1) {
        switchPlayer();
    } else {
        game.updateRollScore(newRoll);
        document.querySelector("#turnTotalSum").innerText = game.roll;  
    }
}

window.addEventListener("load", function() {
    document.querySelector("#roll").addEventListener("click", handleDiceRoll);
    document.querySelector("form").addEventListener("submit", startGame);
    document.getElementById("hold").addEventListener("click", calculateScore);
});



