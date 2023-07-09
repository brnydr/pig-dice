//Business Logic for Game

function Game() {
    this.players = {};
    this.currentId = 0;
}

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

// const newPlayer = new Player("kari");

// const newPlayer2 = new Player("brian");

// const newGame = new Game();

// newGame.addPlayer(newPlayer2);

// newGame.addPlayer(newPlayer);


// newGame:

// {
//     1: {name: brian, score: 0},
//     2: {name: kara, score: 0}
// }