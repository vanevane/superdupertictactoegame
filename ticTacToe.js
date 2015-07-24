/**
 * Created by HS on 18/07/2015.
 */
var GameBoard = require('./gameBoard');
var Player = require('./player');
var readlineSync = require('readline-sync');

var TicTacToeGame = function()
{
    this.players = [];
    this.gameboard;

    this.turns = []; // Stores the json for turns
    this.player1movements = []; // Stores the inputs for P1
    this.player2movements = []; // Stores the inputs for P2

    this.init();
    this.start();
};

TicTacToeGame.prototype.init = function()
{
    this.players.push(new Player('Player 1', 'X'));
    this.players.push(new Player('Player 2', 'O'));
    this.gameboard = new GameBoard();
};


TicTacToeGame.prototype.start = function(input)
{
    this.TwoPlayers(input);
};

TicTacToeGame.prototype.TwoPlayers = function(input)
{
    var turns1 = 5;
    var turns2 = 4;

    console.log('Maximum number of turns for Player 1: ', turns1);
    console.log('Maximum number of turns for Player 2: ', turns2);

    console.log(this.gameboard.print());

    var gameStatus = '';

    while((turns1 + turns2) > 0) {

        while ((turns1) > 0) {

            console.log('FIRST PLAYER TURN ', turns1);

            var input = readlineSync.question('Player 1, input a position: ');

            if(this.gameboard.getCurrentPosition(input) == '|_|')
            {
                this.gameboard.setPosition(input, 1);
            }
            else
            {
                console.log('----------Please type a valid input and/or a position not already played----------\n');
                console.log(this.gameboard.print());
                continue;
            }

            console.log(this.gameboard.print());

            // Storing an input inside the "this.player1movements" array.
            this.player1movements.push(parseInt(input));

            gameStatus = this.verifyWinner(1, this.player1movements);
            console.log(gameStatus);
            this.checkForProcessEnding(gameStatus);
            turns1--;
            break;
        }

        while (turns2 > 0) {
            console.log('SECOND PLAYER TURN ', turns2);

            var input = readlineSync.question('Player 2, input a position: ');

            if(this.gameboard.getCurrentPosition(input) == '|_|')
            {
                this.gameboard.setPosition(input, 2);
            }
            else
            {
                console.log('----------That position has been played already----------\n');
                console.log(this.gameboard.print());
                continue;
            }

            console.log(this.gameboard.print());

            // Storing an input inside the "this.player2movements" array.
            this.player2movements.push(parseInt(input));

            gameStatus = this.verifyWinner(2, this.player2movements);
            console.log(gameStatus);
            this.checkForProcessEnding(gameStatus);
            turns2--;
            break;
        }
    }
};

//TicTacToeGame.prototype.verifyWinner = function(){
//    if(this.checkResult(this.player1movements))
//    {
//        console.log('Player 1 wins!!!');
//        process.exit();
//    }
//    if(this.checkResult(this.player2movements))
//    {
//        console.log('Player 2 wins!!!');
//        process.exit();
//    }
//};

TicTacToeGame.prototype.verifyWinner = function(player, array){
    var res = 'There is not a winner yet, keep playing!';

    if(this.gameboard.checkResult((array)))
    {
        res = 'Player ' + player + ' wins!!!';
    }

    return res;
};

TicTacToeGame.prototype.checkForProcessEnding = function(status){
    if(status == 'Player 1 wins!!!' || status == 'Player 2 wins!!!')
    {
        process.exit();
    }
};

TicTacToeGame.prototype.getTurns = function() {
    return this.turns;
};

module.exports = TicTacToeGame;
