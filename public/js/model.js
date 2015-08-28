$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

******************DID SOME STUFF CHECK IT OUT - BEN***************************

var Game = function(){

  this.player1 = new Player();
  this.player2 = new Player();

  this.connectFour = [];

// this.players = [player1, player2];

this.board = {
c1:{'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
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
Game.prototype.checkColumn = function(column){
  if this.board
}


Game.prototype.placePiece = function(column, color){

  var i = 7
  while(i--){
    if (this.board[column][i] === ''){
      this.board[column][i] = color
      return;
    } else {
      console.log('column is full!')
    };
    };
  };
};

// Game.prototype.startGame = function(){
//   this.players =
// }

var Player = function(number) {
  this.enabled = false;
  this.column = '';
};


Game.prototype.startGame = function(){
  this.player1.enabled = true;
};

Game.prototype.makeMove = function(){

  if(this.player1.enabled === true){
    this.player1.column = 'c1'; // player chooses column
    this.placePiece(this.player1.column,'r');
    this.player1.enabled = false;
    this.player2.enabled = true;
    this.scanR('c1');
  }
  else if(this.player2.enabled === true){
    this.player2.column = 'c1'; // player chooses column
    this.placePiece(this.player2.column, 'r');
    this.player2.enabled = false;
    this.player1.enabled = true;
    this.scanB('c1');
  };
};

Game.prototype.scanR = function(column){
  // var i = 7;

  for (var i = 7; i > 0; i--){
   // while(i--)
    if (this.board[column][i] === 'r'){
      this.connectFour.push('r');
      this.checkWin();
    } else {
      this.connectFour = [];
      };
    };
};

Game.prototype.scanB = function(column){
  // while(i--)
  for (var i = 7; i > 0; i--){
    if (this.board[column][i] === 'r') {
      this.connectFour.push('r');
      this.checkWin();
    } else {
      this.connectFour = [];
      };
  };
};

Game.prototype.checkWin = function(){
  if(this.connectFour.length === 4){
    console.log("you win!")
  };
};


var game = new Game();
game.startGame();
game.makeMove();


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




