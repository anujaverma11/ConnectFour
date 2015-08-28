var board = {

c1: {'1': 'b', '2': 'r', '3': '', '4': '', '5': '', '6': 'r'},
c2: {'1': '', '2': '', '3': '', '4': '', '5': 'r', '6': ''},
c3: {'1': '', '2': 'r', '3': '', '4': '', '5': '', '6': ''},
c4: {'1': 'b', '2': '', '3': '', '4': 'r', '5': '', '6': ''},
c5: {'1': '', '2': '', '3': '', '4': '', '5': 'b', '6': ''},
c6: {'1': '', '2': '', '3': '', '4': '', '5': '', '6': ''},
c7: {'1': 'b', '2': 'b', '3': '', '4': '', '5': '', '6': 'b'}

}

$.each(board, function(index, value){
	$.each(value, function(ind, val){
		if(index == "c7"){
			index = "c6";
		};
		var local = index + ind
		loc = "#" + local
		if (val === 'r'){
			console.log("I am in red" + local)
			$(loc).css("background-color", "red");
		} else if (val === 'b'){
			console.log("I am in black" + loc)
			$(loc).css("background-color", "black");
		};
	});
});




