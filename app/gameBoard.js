/**
 * Created by HS on 18/07/2015.
 */
var Axis = require('./axis');

var GameBoard = function()
{
    this.size = 3;

    this.grid = [[]];
    this.createGrid(this.size);
};


GameBoard.prototype.createGrid = function (size)
{
    var EMPTY_CELL = '|_|';

    for(var i = 0; i < size; i++)
    {
        this.grid[i] = [];
        //
        for(var j = 0; j < size; j++)
        {
            this.grid[i][j] = EMPTY_CELL;
        }
    }
}

/*
Returning the table as a string.
 */
GameBoard.prototype.print = function()
{
    var res = '';

    for(var i = 0; i < this.size; i++) {
        for(var z = 0; z < this.size; z++) {
            res += this.grid[z][i];
        }
        res += '\n';
    }
    return res;
};

GameBoard.prototype.setPosition = function(input, player){
    var axis = this.mapTurn(input);
    var x = axis.getRow();
    var y = axis.getColumn();

    if(player == 1)
    {
        this.grid[x][y] = '|X|';
    }
    if(player == 2)
    {
        this.grid[x][y] = '|O|';
    }
};

GameBoard.prototype.getCurrentPosition = function(input){
    try {
        if(input == "")  throw ("empty");
        if(isNaN(input)) throw ("not a number");
        //input = Number(input);
        if(input < 1)   throw ("too low, it should be greater or equal than 1");
        if(input > 9)   throw ("too high, it should be lower or equal than 9");


        var axis = this.mapTurn(input);
        var x = axis.getRow();
        var y = axis.getColumn();

        return this.grid[x][y];
    }
    catch(err) {
        console.log("Input is " + err);
    }
};

GameBoard.prototype.mapTurn = function(input)
{
    switch(input)
    {
        case '1': return new Axis(0, 0); break;
        case '2': return new Axis(0, 1); break;
        case '3': return new Axis(0, 2); break;
        case '4': return new Axis(1, 0); break;
        case '5': return new Axis(1, 1); break;
        case '6': return new Axis(1, 2); break;
        case '7': return new Axis(2, 0); break;
        case '8': return new Axis(2, 1); break;
        case '9': return new Axis(2, 2); break;
    }
};

GameBoard.prototype.checkResult = function(array){
    if(this.upperRow(array)){return true;}
    if(this.middleRow(array)){return true;}
    if(this.lowerRow(array)){return true;}
    if(this.leftColumn(array)){return true;}
    if(this.middleColumn(array)){return true;}
    if(this.rightColumn(array)){return true;}
    if(this.upperDiagonal(array)){return true;}
    if(this.lowerDiagonal(array)){return true;}
    return false;
};

GameBoard.prototype.upperRow = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 1 || array[i] == 2 || array[i] == 3)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

GameBoard.prototype.middleRow = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 4 || array[i] == 5 || array[i] == 6)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

GameBoard.prototype.lowerRow = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 7 || array[i] == 8 || array[i] == 9)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

GameBoard.prototype.leftColumn = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 1 || array[i] == 4 || array[i] == 7)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

GameBoard.prototype.middleColumn = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 2 || array[i] == 5 || array[i] == 8)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

GameBoard.prototype.rightColumn = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 3 || array[i] == 6 || array[i] == 9)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

GameBoard.prototype.upperDiagonal = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 1 || array[i] == 5 || array[i] == 9)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

GameBoard.prototype.lowerDiagonal = function(array)
{
    var res = false;
    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == 3 || array[i] == 5 || array[i] == 7)
        {
            count++;
        }
        count == 3 ? res = true : res = false;
    }
    return res;
};

/*
 Method that creates a "json" that represents a turn (i.e. value, player)
 */
//GameBoard.prototype.createTurnObject = function(value, player)
//{
//    var turnObject = {};
//
//    turnObject = {
//        'value': value,
//        'player': player
//    };
//
//    return turnObject;
//};

module.exports = GameBoard;