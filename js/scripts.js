//Business Logic for Game

// let newPlayer = new Player("kari");

// let newPlayer2 = new Player("brian");

let game = new Game();

// game.addPlayer(newPlayer);

// game.addPlayer(newPlayer2);

function Game() {
    this.players = {};
    this.currentId = 0;
    this.roll = 0;
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
    
    let newPlayer = new Player(playerName);
    let newPlayer2 = new Player(playerName2);
    game.addPlayer(newPlayer);
    game.addPlayer(newPlayer2);
    document.getElementById("startGame").classList.add('hidden');
    

}
//UI Logic


function displayDiceRoll(e) {
    e.preventDefault;
    let newRoll = rollDice();
    document.querySelector("#currentRoll").innerText = newRoll;
    game.updateRollScore(newRoll);
    document.querySelector("#turnTotalSum").innerText = game.roll;
}

window.addEventListener("load", function() {
    document.querySelector("#roll").addEventListener("click", displayDiceRoll);
    document.querySelector("#playerNames").addEventListener("click", startGame);
    
});



