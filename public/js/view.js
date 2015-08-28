$(document).ready(function() {


console.log('view loaded')

var game = new Game();

game.startGame();


$('th.column_1 button').on('click', function(){
	console.log('col 1 clicked');
	game.player1.choiceColumn = 'c1';
	game.makeMove();
	$('')
})

$('th.column_1 button').on('click', function(){
	console.log('col 1 clicked');
	game.player1.choiceColumn = 'c1';
	game.makeMove();
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



