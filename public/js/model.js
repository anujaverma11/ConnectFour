$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});


var Board = {

c1: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
c2: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
c3: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
c4: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
c5: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
c6: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
c7: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''}

}

console.log(Board)

Board.c1[1] = 'r';

var spaceEmpty = function(column){
  var i = 6
  while(i--){
    if (Board.column[i] === ''){

    }
  }
}

var placePiece = function(){
  var i = 6
  while(i--){
    if spaceEmpty{

    }
  }
}


// for(var col = 1; col < 8; col++){
//   for(var i = 1; i < 7; i++){
//     (c + 'col')['i'] = '';
//   }
// }

// console.dir(board)


// var Board = function(){
//   this.length = 42;
// }

// var makeBoard = function(){
//   for(var i = 1; i < board.length; i++){
//     board.




