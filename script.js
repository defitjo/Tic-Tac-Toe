// Game Start

function newGame() {
  for(let i = 1; i <= 9; i++) {
    newGrid(i);
  }
  document.user = 'X';
  document.winner = null;
  userMessage(document.user + " will start")
}

// Message's to User

function userMessage(msg) {
  document.getElementById('instruction').innerText = msg;
}

function userMove(grid) {
    if (document.winner != null) {
        userMessage(document.user + " You've won already")
    } else if(grid.innerText == '') {
        grid.innerText = document.user;
        userTurn();
    } else {
        userMessage("Choose different location");
    }
}

function userTurn() {
    if(lookForWinner(document.user)) {
        userMessage("Woohoo!!! " + document.user + " You Won!!! ^_^")
        document.winner = document.user;
    } else if(document.user == 'X') {
        document.user = 'O';
        userMessage("It's " + document.user + "'s turn")
    } else {
        document.user = 'X';
        userMessage("It's " + document.user + "'s turn")
    }
}

// Check for winner

function lookForWinner(move) {
    let result = false;
    if(confirmRow(1, 2, 3, move) ||
       confirmRow(4, 5, 6, move) ||
       confirmRow(7, 8, 9, move) ||
       confirmRow(1, 4, 7, move) ||
       confirmRow(2, 5, 8, move) ||
       confirmRow(3, 6, 9, move) ||
       confirmRow(1, 5, 9, move) ||
       confirmRow(3, 5, 7, move)) {
           result  = true;
       }
       return result;
}

function confirmRow(a, b, c, move) {
    let result = false;
    if (checkGrid(a) == move && checkGrid(b) == move && checkGrid(c) == move) {
        result = true;
    }
    return result;
}

function checkGrid(num) {
    return document.getElementById("box" + num).innerText
}

// Reset Game 

function newGrid(num) {
    document.getElementById("box" + num).innerText = "";
}