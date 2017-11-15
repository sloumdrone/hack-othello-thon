$(document).ready(function(){
    //we can either put click handlers here or link to an initialize function
    //for the board, I think we should use delegated click handlers based in a container obj
    var game = new Game();
    $('.container').on('click','div.square', checkIfMoveIsLegal);
});
function Game(){
  //this creates an object that serves as the model for the Game
  //it will hold all position and statistical information
  //it will also have methods to update that information
  this.playing = true;
  this.currentPlayer = 'black';
  this.turn = 1;
  this.winner = null;

  //'e'=empty, 'w'=white, 'b'=black, 'l'=legal
  this.gameboard = [
    ['e','e','e','e','e','e','e','e'],
    ['e','e','e','e','e','e','e','e'],
    ['e','e','e','e','e','e','e','e'],
    ['e','e','e','b','w','e','e','e'],
    ['e','e','e','w','b','e','e','e'],
    ['e','e','e','e','e','e','e','e'],
    ['e','e','e','e','e','e','e','e'],
    ['e','e','e','e','e','e','e','e'],
  ];
  this.score = {
    'black': 2,
    'white':2
  };

  this.updateScore = function(amount){
    var otherPlayer = this.currentPlayer === 'black' ? 'white' : 'black';
    this.score[this.currentPlayer] += amount;
    this.score[otherPlayer] -= amount;
  }

  this.checkForGameOver = function(){
    if (this.turn > 60){
      this.playing = false;

    }
  }
}

function resetGame(){
  //this will reset the game board
  game = new Game()
}

function buildBoard(){
  var createRow= $('<div>').addClass('row');

  for(var i=0; i<8;i++){
    $('.container').append(createRow);
      for(var j=0; j<8; j++){
          var createColumn= $('<div>',{
              class:'square',
              attr: {
                  row: j,
                  col: j}
          });
        $('.row:last-child').append(createColumn);
      }
  }
  console.log(createColumn,createRow);
  //this is the dom creation of the board, maybe make part of Game object
}

function updateDisplay(){
  //Update the board position and points in the display
}

function checkWinState(){
  //determine if a win state has been reached
  //this can maybe be accomplished purely based on turn number
}

function checkIfMoveIsLegal(xArr, yArr){
  //console.log("Checking if Move is Legal")
  var xPosition = xArr.indexOf($(this));
  var yPosition = yArr.indexOf($(this));
  var currentTurn =  game.currentPlayer;
  var lastTurn = game.getOpponentName();
  if()

  //on click, checks to see if the move is valid
}

function handleLegalMove(){
  var piecesFlipped = null;
  //does a tree search for all possible pieces affected by move
  //updated the game objects gameboard
  game.updateScore(piecesFlipped);
  updateDisplay();
}
