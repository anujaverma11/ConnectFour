// $(document).ready(function() {
//   // This is called after the document has loaded in its entirety
//   // This guarantees that any elements we bind to will exist on the page
//   // when we try to bind to them

//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
// });


var Player = function() {
  this.enabled = false;
  this.choiceColumn = null;
};


var Game = function(){

  this.player1 = new Player();
  this.player2 = new Player();

  this.columnConnectFour = [];
  this.rowConnectFour = [];

// this.players = [player1, player2];

  this.board = {
    c1: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
    c2: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
    c3: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
    c4: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
    c5: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
    c6: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
    c7: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''}
  };
};

// possible solution for diagonal wins

// for (var col = 7; col > 0; col--){
//     for (var row = 6; row > 0;row--){
//       if(this.board['c' + col][row] == 'r'){
//          this.connectFour.push('r')

//   }
// }
// Game.prototype.checkColumn = function(column){
//   if this.board
// }


Game.prototype.placePiece = function(column, color){

  var piecesInColumn = 0;
  var row = 6 + 1; // offset by 1 to support while() loop

  while(row--){
    if (this.board[column][row] === ''){
      this.board[column][row] = color;
      return [column, row];

    } else {
      piecesInColumn++
      if (piecesInColumn === 6) {
        console.log('column is full!')
      }

    }
  }
}

// Game.prototype.startGame = function(){
//   this.players =
// }

Game.prototype.startGame = function(){
  this.player1.enabled = true;
};

Game.prototype.makeMove = function(){

  if(this.player1.enabled === true){
    // this.player1.choiceColumn = 'c1'; // player chooses column
    var position = this.placePiece(this.player1.choiceColumn,'r');
    this.player1.enabled = false;
    this.player2.enabled = true;
    this.scanColumnForR(this.player1.choiceColumn);
    this.scanRowForR(position[1]); // position[1] selects row
  }
  else if(this.player2.enabled === true){
    // this.player2.choiceColumn = 'c1'; // player chooses column
    var position = this.placePiece(this.player2.choiceColumn, 'b');
    this.player2.enabled = false;
    this.player1.enabled = true;
    this.scanColumnForB(this.player2.choiceColumn);
    this.scanRowForB(position[1]); // position[1] selects row
  };
};

Game.prototype.scanColumnForR = function(column){
  // var i = 7;

  for (var row = 6; row > 0; row--){
    if (this.board[column][row] === 'r'){
      this.columnConnectFour.push('r');
      this.checkWin();
    } else {
      this.columnConnectFour = [];
      };
  };
};

Game.prototype.scanColumnForB = function(column){
  for (var row = 6; row > 0; row--){
    if (this.board[column][row] === 'b') { // change to 'b'
      this.columnConnectFour.push('b');
      this.checkWin();
    } else {
      this.columnConnectFour = [];
      };
  };
};

Game.prototype.scanRowForR = function(row){

  for (var columnNumber = 7; columnNumber > 0; columnNumber--){
    if (this.board['c' + columnNumber][row] === 'r') { // change to 'b'
      this.rowConnectFour.push('r');
      this.checkWin();
    } else {
      this.rowConnectFour = [];
    };
  };
};

Game.prototype.scanRowForB = function(row){

  for (var columnNumber = 7; columnNumber > 0; columnNumber--){

    if (this.board['c' + columnNumber][row] === 'b') { // change to 'b'
      this.rowConnectFour.push('b');
      this.checkWin();
    } else {
      this.rowConnectFour = [];
      };
  };
};




Game.prototype.checkWin = function(){
  if(this.columnConnectFour.length === 4 || this.rowConnectFour.length === 4){
    console.log("you win!");
  };
};


var game = new Game();

game.startGame();

game.player1.choiceColumn = 'c1';
game.makeMove();

game.player2.choiceColumn = 'c6';
game.makeMove();

game.player1.choiceColumn = 'c2';
game.makeMove();

game.player2.choiceColumn = 'c6';
game.makeMove();

game.player1.choiceColumn = 'c3';
game.makeMove();

game.player2.choiceColumn = 'c5';
game.makeMove();

game.player1.choiceColumn = 'c4';
game.makeMove();

// game.player1.choiceColumn = 'c4';
// game.makeMove();

// game.player2.choiceColumn = 'c5';
// game.makeMove();


// keys needed to match for consecutive red or black pieces

// 1234, 2345, 3456, 6543, 5432, 4321

// game.board.c1[1] = 'r';

// Game.prototype.checkSpace = function(column){
//   var i = 6
//   while(i--){
//     if (Board.column[i] === ''){

//     }
//   }
// }

// for(var col = 1; col < 8; col++){
//   for(var i = 1; i < 7; i++){
//     (c + 'col')['i'] = '';
//   }
// }

// console.dir(board)


// var Board = function(){
  // this.length = 42;
// }

// var makeBoard = function(){
//   for(var i = 1; i < board.length; i++){
//     board.




