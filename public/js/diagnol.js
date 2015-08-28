scanbackwardD = function(place){ //c2[1]
    console.log(place);
    column = place[1];

    index = place[3];

    piece = board['c' + column][index];
        console.log("column = "+ column)
        console.log(index)

       if ((column === index || column < index) && piece!=='')

            {console.log("hi2")
                index = index-column+1;
             column = 1;
             var occurrence = 0
                for(var check = 1; check <= 6; check++) {
                    if (piece === board['c' + column][index]) {
                        console.log(occurrence, column, index, board['c' + column][index])
                        occurrence +=1
                        if (occurrence === 4) {
                            return "Winner"}
                    }
                    else
                        {occurrence = 0}
                    column += 1
                    index += 1

                }
            }

        else if ((column > index) && piece!=='')
            {console.log("column = "+ column)
            console.log(index)
            {column = (column-index)+1
            index = 1
            console.log("hi2")
                index = index-column+1;
             column = 1;
             occurrence = 0
                for(check = 1; check <= 7; check++) {
                    if (piece === board['c' + column][index]) {
                        console.log(occurrence, column, index, board['c' + column][index])
                        occurrence +=1
                        if (occurrence === 4) {
                            return "Winner"}
                    }
                    else
                        {occurrence = 0}
                    column += 1
                    index += 1

                }
            }

     }


}

//===============================================================

scanforwardD1 = function(place){
    console.log(place);

    column = place[1];

    index = place[3];

    piece = board['c' + column][index];
        console.log("column = "+ column)
        console.log(index)

   if (piece!=='')
            {
            index = column-index+1;
             column = 7;
             occurrence = 0
                for(check = 1; check <= 7; check++) {
                    if (piece === board['c' + column][index]) {
                        console.log(occurrence, column, index, board['c' + column][index])
                        occurrence +=1
                        if (occurrence === 4) {
                            return "Winner"}
                    }
                    else
                        {occurrence = 0
                        }
                    column -= 1
                    index += 1

                }
            }


}
//===============================================================

scanforwardD2 = function(place){
    console.log(place);
    column = place[1];
    index = place[3];

    piece = board['c' + column][index];
        console.log("column = "+ column);
        console.log(index);

   if (piece!=='')
            {
                column = Number(column) + Number(index) - 1;
                console.log(column);
                index = 1; console.log(index);

             occurrence = 0
                for(check = 1; check <= 7; check++) {
                    if (piece === board['c' + column][index]) {
                        console.log(occurrence, column, index, board['c' + column][index])
                        occurrence +=1
                        if (occurrence === 4) {
                            return "Winner"}
                    }
                    else
                        {occurrence = 0
                        }
                    column -= 1
                    index += 1

                }
            }


}


