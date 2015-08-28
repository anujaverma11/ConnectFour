$(document).ready(function() {


console.log('view loaded')

var game = new Game();

game.startGame();


$('th.column_1 button').on('click', function(){
	console.log('col 1 clicked');
	if (game.player1.enabled) {
	game.player1.choiceColumn = 'c1';
	game.makeMove();
	$('#' + game.player1.position[0] + game.player1.position[1]).css('background-color', 'red');
	// console.log("a " + game.scanColumnForR())
		if(game.checkWin() === true){
			console.log("HI");
	console.log(game.checkWin());
			// $('body').fadeOut('fast', 100)
			$('body').append('<h1> We have a WINNER! </h1>')
		}
} else if (game.player2.enabled) {
	game.player2.choiceColumn = 'c1';
	game.makeMove();
	$('#' + game.player2.position[0] + game.player2.position[1]).css('background-color', 'black')
	if(game.checkWin){
		// $('body').fadeOut('fast', 100)
		$('body').append('<h1> We have a WINNER! </h1>')
	}
}
})

$('th.column_2 button').on('click', function(){
	console.log('col 2 clicked');
	if (game.player1.enabled) {
	game.player1.choiceColumn = 'c2';
	game.makeMove();
	$('#' + game.player1.position[0] + game.player1.position[1]).css('background-color', 'red')
} else if (game.player2.enabled) {
	game.player2.choiceColumn = 'c2';
	game.makeMove();
	$('#' + game.player2.position[0] + game.player2.position[1]).css('background-color', 'black')
	}
})

$('th.column_3 button').on('click', function(){
	console.log('col 3 clicked');
	if (game.player1.enabled) {
	game.player1.choiceColumn = 'c3';
	game.makeMove();
	$('#' + game.player1.position[0] + game.player1.position[1]).css('background-color', 'red')
} else if (game.player2.enabled) {
	game.player2.choiceColumn = 'c3';
	game.makeMove();
	$('#' + game.player2.position[0] + game.player2.position[1]).css('background-color', 'black')
	}
})

$('th.column_4 button').on('click', function(){
	console.log('col 4 clicked');
	if (game.player1.enabled) {
	game.player1.choiceColumn = 'c4';
	game.makeMove();
	$('#' + game.player1.position[0] + game.player1.position[1]).css('background-color', 'red')
} else if (game.player2.enabled) {
	game.player2.choiceColumn = 'c4';
	game.makeMove();
	$('#' + game.player2.position[0] + game.player2.position[1]).css('background-color', 'black')
	}
})

$('th.column_5 button').on('click', function(){
	console.log('col 5 clicked');
	if (game.player1.enabled) {
	game.player1.choiceColumn = 'c5';
	game.makeMove();
	$('#' + game.player1.position[0] + game.player1.position[1]).css('background-color', 'red')
} else if (game.player2.enabled) {
	game.player2.choiceColumn = 'c5';
	game.makeMove();
	$('#' + game.player2.position[0] + game.player2.position[1]).css('background-color', 'black')
	}
})

$('th.column_6 button').on('click', function(){
	console.log('col 6 clicked');
	if (game.player1.enabled) {
	game.player1.choiceColumn = 'c6';
	game.makeMove();
	$('#' + game.player1.position[0] + game.player1.position[1]).css('background-color', 'red')
} else if (game.player2.enabled) {
	game.player2.choiceColumn = 'c6';
	game.makeMove();
	$('#' + game.player2.position[0] + game.player2.position[1]).css('background-color', 'black')
	}
})

$('th.column_7 button').on('click', function(){
	console.log('col 7 clicked');
	if (game.player1.enabled) {
	game.player1.choiceColumn = 'c7';
	game.makeMove();
	$('#' + game.player1.position[0] + game.player1.position[1]).css('background-color', 'red')
} else if (game.player2.enabled) {
	game.player2.choiceColumn = 'c7';
	game.makeMove();
	$('#' + game.player2.position[0] + game.player2.position[1]).css('background-color', 'black')
	}
})





// $.each(board, function(index, value){
// 	$.each(value, function(ind, val){
// 		if(index == "c7"){
// 			index = "c6";
// 		};
// 		var local = index + ind
// 		loc = "#" + local
// 		if (val === 'r'){
// 			console.log("I am in red" + local)
// 			$(loc).css("background-color", "red");
// 		} else if (val === 'b'){
// 			console.log("I am in black" + loc)
// 			$(loc).css("background-color", "black");
// 		};
// 	});
// });
});



