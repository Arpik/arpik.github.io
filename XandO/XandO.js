
// start of the game

function startGame() {

    document.turn = "X";
    document.winner = null;

    topMessage(document.turn +  " gets to start!");
}

// text message above the square

function topMessage(msg) {

    document.getElementById("message").innerText = msg;

}


// changing button background color

function setColor(color) {

    document.getElementById("1").style.backgroundColor = color;

}

// If ve have a winner don't let to continue game.

function continueGame(square) {

    if (document.winner !== null) {

        alert(document.winner + " You won!");

    }

    else if(square.innerText === "") {                               // square's value to be unchangeable

        square.innerText = document.turn;                       //

        switchTurn();

    } else {

        alert("Choose an empty square!");

    }
}

// determine who's turn it is

function switchTurn () {

    // if there is a winner

    if (checkForWinner(document.turn)) {

        alert("Congratulations " + document.turn + "! You win!");

        document.winner = document.turn;

        setColor("#A9A9A9");

    // if there is no winner and there is no space in square.

    } else if (checkForTie()) {

        alert("It's Tie! Lets play again!");

        newGame();

     // switching turns

    } else if (document.turn === "X") {

        document.turn = "O";

        topMessage( document.turn + "'s turn!");

    }
    else {

        document.turn = "X";

        topMessage( document.turn + "'s turn!");
    }
}


//winner checking function

function checkForWinner (move) {

    var result = false;

    if( checkRow( 1, 2, 3, 4, move) ||
        checkRow( 5, 6, 7, 8, move) ||
        checkRow( 9, 10, 11, 12,  move) ||
        checkRow( 13, 14, 15, 16, move) ||
        checkRow( 1, 5, 9, 13,  move) ||
        checkRow( 2, 6, 10, 14, move) ||
        checkRow( 3, 7, 11, 15, move) ||
        checkRow( 4, 8, 12, 16, move) ||
        checkRow( 1, 6, 11, 16, move) ||
        checkRow( 4, 7, 10, 13, move))

    {
        result = true;

    }

    return result;

}

// Row's checking function

function checkRow( a, b, c, d, move ) {

    var result = false;

    if( getBox(a) === move && getBox(b) === move && getBox(c) === move && getBox(d) === move){

        getSquare(a).style.backgroundColor = "#D6C0EA";
        getSquare(b).style.backgroundColor = "#D6C0EA";
        getSquare(c).style.backgroundColor = "#D6C0EA";
        getSquare(d).style.backgroundColor = "#D6C0EA";

        result = true;
    }

    return result;
}

//getting text in square;

function getBox(number) {

    return document.getElementById("s" + number).innerText;

}

// getting square for highlighting

function getSquare(number) {

    return document.getElementById("s" + number);
}

// restart function

function newGame() {

    location.reload();
}


// if we have no winner and empty square.

function checkForTie() {

    for (var i = 1; i < 17; i++) {

        var y = getBox(i);

        if (y === "")

            return false;
    }

    return true;
}



        //
        //     return false;
        //
        // }
        //
        // return true;



        //









