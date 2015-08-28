var board = {};

for (i = 0; i < 41; i++) {
	board['c' + i] = '';
};	



var board = new Board(41)


// var newboard = GenerateBoard();


function PlayGame(){
	this.activeBoard = GenerateBoard();
	this.player1 = "r"
	this.player2 = "b"
	this.currentPlayer = 1



};

PlayGame.prototype.togglePlayer = function(active){
		if (this.currentPlayer === 1){
			this.currentPlayer = 2;
		};
		else {
			this.currentPlayer = 1;
		};
};

PlayGame.prototype.isAWinner = function()


PlayGame.prototype.placePiece = function(column){
	

};

console.log(newboard);






var Board = function(size){
	this.size = size;
	this.cells = [];
}

Board.prototype.setup = function() {
	for (i = 0; i < 41; i++) {
  	this.cells.push('');
	};	
};

Board.prototype.set = function(idx, value) {
	this.cells[idx] = value;
};

Board.prototype.get = function(idx) {
	return this.cells[idx];
};
