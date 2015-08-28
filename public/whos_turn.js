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

PlayGame.prototype.isAWinner = function(piece){
	count_vert = 0
	count_hora = 0
	count_diag = 0
	length = 3

	for (i=0; i < board.length; i++)
		if bo

	var vert = function(){
		for (i = 0; i < 3; i++) {
			board['c' + i] = '';
};
		for(i)

	
	board.c1[6]

};


PlayGame.prototype.placePiece = function(column){


};

console.log(newboard);



<div class="container">
	<% (6).times do |tr| %>
	<div class="c<%= tr + 1 %>" ></div> 
	<% (7).times do |td| %>
		<div class="circle" id="c<%= tr + 1 %><%= td + 1%>"></div> 
	<%end%>
<%end%>

</div>


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




