/**
 * Created by HS on 18/07/2015.
 */

var TicTacToeGame = require('./ticTacToe');
//var GameBoard = require('./gameBoard');
//var Player = require('./player');

describe('TicTacToe', function(){

    var tictactoe;

    beforeEach(function(){
        //do something before each spec/it() call
        tictactoe = new TicTacToeGame();
    });

    afterEach(function(){
        tictactoe = null;
    });

    it('Should verify that the result is true when an array contains 1, 2 and 3 values.', function(){
        var actRes = tictactoe.gameboard.upperRow([1, 4, 2, 5, 3]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 4, 5 and 6 values.', function(){
        var actRes = tictactoe.gameboard.middleRow([4, 5, 6]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 7, 8 and 9 values.', function(){
        var actRes = tictactoe.gameboard.lowerRow([7, 8, 9]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 1, 4 and 7 values.', function(){
        var actRes = tictactoe.gameboard.leftColumn([1, 4, 7]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 2, 5 and 8 values.', function(){
        var actRes = tictactoe.gameboard.middleColumn([2, 5, 8]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 3, 6 and 9 values.', function(){
        var actRes = tictactoe.gameboard.rightColumn([3, 6, 9]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 1, 5 and 9 values.', function(){
        var actRes = tictactoe.gameboard.upperDiagonal([1, 5, 9]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 3, 5 and 7 values.', function(){
        var actRes = tictactoe.gameboard.lowerDiagonal([3, 5, 7]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should throw "empty" when an empty imput has been made', function(){
        expect( function(){
            tictactoe.gameboard.getCurrentPosition('');
        }).toThrow("empty");
    });

    it('Should throw "not a number" when an imput is not a number', function(){
        expect( function(){
            tictactoe.gameboard.getCurrentPosition('hi');
        }).toThrow('not a number');
    });

    it('Should throw "too low, it should be greater or equal than 1" when an input is less than 1', function(){
        expect( function(){
            tictactoe.gameboard.getCurrentPosition(-1);
        }).toThrow('too low, it should be greater or equal than 1" when an input is less than 1');
    });

    it('Should throw "too high, it should be lower or equal than 9" when an input is greater than 9', function(){
        expect( function(){
            tictactoe.gameboard.getCurrentPosition(10);
        }).toThrow('too high, it should be lower or equal than 9" when an input is greater than 9');
    });
});



