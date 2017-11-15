//recursion 
var switching = false; 


const signs = function (n, type) {
	if (n===0) {
		return "";
	}

	return type + signs(n-1, type); 
};

const spaces = function(n) {
	if (n===0) {
		return "";
	}

	return " " + spaces(n-1); 
};

const diamond = function(height,type){
  if(height %2 ===0){
    height=height+1;
  }
const signsAndSpaces = function(number,sign,type,space){
	if(number===0){
		return "";
	}
	console.log(spaces(space)+signs(sign,type));
	if (space !== 0 && switching === false) {
		signsAndSpaces(number-1,sign+2,type,space-1);
	}
	else if (space === 0 || switching === true) {
	  switching = true;
		signsAndSpaces(number-1,sign-2,type,space+1);
	}
};

	signsAndSpaces(height,1,type,(height-1)/2);
};
diamond(4,"@");




//loop 
const diamond = function(length,sgn){
  
  if(length % 2 === 0){
    length = length + 1;
  }
  
const string = function(n,type){
  let x = '';
  for(let i = 0; i < n; i++){
    x += type;
  }
  return x;
}
let spaces = (length-1)/2;
let signs = 1;
for(let i = 1; i <= length; i++){
  console.log(string(spaces, " ") + string(signs,sgn));
if(i <= length/2){
  spaces = spaces - 1;
  signs = signs + 2
}
else{
  spaces++;
  signs -= 2
}
}
}
diamond(9,"*");


//Tic Tac Toe

const theWinner = 
{
  winner: "none",
};

var board = [
    [' ', ' ', ' '], 	
    [' ', ' ', ' '], 
    [' ', ' ', ' ']  
];

const makeMove = function(board, location, isX) 
{
	var x = location[0];
	var y = location[1];
	var print = '';
	if(isX) {
	print = 'x'; 
	}
	else {
		print = 'o';
	}
	if(board[x][y] === ' ') 
		board[x][y] = print;
	else return -1;
	return board;
};

const rand = function() 
{
	return Math.floor(Math.random() * 3);
};	

const nextMove = function(board, isX) 
{
	var print = '';
	if(isX) {
	print = 'x'; 
	}
	else {
		print = 'o';
	}
	return putInBoard(board, print);
};

const putInBoard = function(arr, value)
{
	var	x = rand();
	var y = rand();
	
	if(arr[x][y] === ' ') 

		return [x,y];
	else
	{ 
		if(!noSpace(board))
			return putInBoard(arr, value);
		return [0,0];
	}
};


const findWinner = function(board) 
{
	const winLoc = 
	[
		[board[0][0], board[0][1], board[0][2]],
		[board[1][0], board[1][1], board[1][2]],
		[board[2][0], board[2][1], board[2][2]],
		
		[board[0][0], board[1][0], board[2][0]],
		[board[0][1], board[1][1], board[2][1]],
		[board[0][2], board[1][2], board[2][2]],
		
		[board[0][0], board[1][1], board[2][2]],
		[board[0][2], board[1][1], board[2][0]]
	];
	
	const winLocPosition = 
	[
		[[0, 0], [0, 1], [0, 2]],
		[[1, 0], [1, 1], [1, 2]],
		[[2, 0], [2, 1], [2, 2]],
		
		[[0, 0], [1, 0], [2, 0]],
		[[0, 1], [1, 1], [2, 1]],
		[[0, 2], [1, 2], [2, 2]],
		
		[[0, 0], [1, 1], [2, 2]],
		[[0, 2], [1, 1], [2, 0]]
	];
	
	for (var i = 0; i < winLoc.length; i++)
	{
		var winningCombos = winLoc[i];
		if (winningCombos[0] === winningCombos[1] && winningCombos[1] === winningCombos[2]
			&& (winningCombos[0] === 'x'|| winningCombos[0] === 'o'))
		{
		  theWinner.winner = winningCombos[0];
		  theWinner.winLoc = winLocPosition[i];
			return theWinner;	
		}
	}
	return undefined;
};

	
const noSpace = function(board)
{
	for(var i = 0; i < board.length; i++)
	{
		for(var j = 0; j < board[i].length; j++)
		{
			if(board[i][j] === ' ') return false 
		}
	}
	return true;
};

const game = function()
{
	var x = true;
	while(theWinner.winner === 'none')
	{
		var nextMoveLoc = nextMove(board, x);
		if((nextMoveLoc[0] === 0 && nextMoveLoc[1] === 0) && noSpace(board))
		{
			theWinner.winner = 'tie';
			return theWinner;
		}
		var move = makeMove(board, nextMoveLoc, x);
		if(move === -1)
		{
			alert('invalid move');
			return;
		}
		
		if(x) {
			x = false;
		}
		else {
			x = true;
		}
	}
};

const drawLine = function(signtX, signtY, moveToX, moveToY)
{
	context.moveTo(signtX, signtY);
	context.lineTo(moveToX, moveToY);
};

const drawField = function()
{
	
	drawLine(200,0,200,600);
	drawLine(400,0,400,600);
	
	drawLine(0,200,600,200);
	drawLine(0,400,600,400);
};

var canvas =  document.getstringById('canvas');
var context =  canvas.getContext('2d');
drawField();
context.strokeStyle = "grey";
context.stroke();


var imgX = document.getstringById("x");
var imgO = document.getstringById("o");
var locAndCoordinates = 
	[
		[[0,0], [50,50]],
		[[0,1], [250,50]],
		[[0,2], [450,50]],
		[[1,0], [50,250]],
		[[1,1], [250,250]],
		[[1,2], [450,250]],
		[[2,0], [50,450]],
		[[2,1], [250,450]],
		[[2,2], [450,450]],
	];
canvas.addEventListener('click', function(evt) {
 determineBoards(evt.offsetX, evt.offsetY);
 console.log(evt.offsetX + ' ' + evt.offsetY);
}, false);

const determineBoards = function(xLocation,yLocation)
{
	var loc = [];
	const  ifSmallerThan = function(x, y)
	{
		return (xLocation < x) && (yLocation < y);
	};
	
	if(ifSmallerThan(200, 200))
	{
		loc = [0,0];
		if(board[loc[0]][loc[1]] === ' ')
			context.drawImage(imgX, 50,50, 100, 100)
	} else if(ifSmallerThan(400, 200))
	{
		loc = [0,1];
		if(board[loc[0]][loc[1]] === ' ')
			context.drawImage(imgX, 250,50, 100, 100);
	}else if(ifSmallerThan(600, 200))
	{
		loc = [0,2];
		if(board[loc[0]][loc[1]] === ' ')
			context.drawImage(imgX, 450,50, 100, 100);
	}else if(ifSmallerThan(200, 400))
	{
		loc = [1,0];
		if(board[loc[0]][loc[1]] === ' ')
			context.drawImage(imgX, 50,250, 100, 100);
	}else if(ifSmallerThan(400, 400))
	{
		loc = [1,1];
		if(board[loc[0]][loc[1]] === ' ')
			context.drawImage(imgX, 250,250, 100, 100)	
	}else if(ifSmallerThan(600, 400))
	{
		loc = [1,2];
			if(board[loc[0]][loc[1]] === ' ')
		context.drawImage(imgX, 450,250, 100, 100)
	}else if(ifSmallerThan(200, 600))
	{
		loc = [2,0];
			if(board[loc[0]][loc[1]] === ' ')
		context.drawImage(imgX, 50,450, 100, 100)
	}else if(ifSmallerThan(400, 600))
	{
		loc = [2,1];
			if(board[loc[0]][loc[1]] === ' ')
		context.drawImage(imgX, 250,450, 100, 100);
	}else if(ifSmallerThan(600, 600))
	{
		loc = [2,2];
		if(board[loc[0]][loc[1]] === ' ')
			context.drawImage(imgX, 450,450, 100, 100);
	}
	if(board[loc[0]][loc[1]] === ' ')
		board[loc[0]][loc[1]] = 'x';
	else return;
	var pcMove =  nextMove(board, false);
	
	for (var i = 0; i < locAndCoordinates.length; i++ )
	{
	
		if(pcMove.toString() ===(locAndCoordinates[i][0]).toString())
		{
			context.drawImage(imgO, locAndCoordinates[i][1][0],locAndCoordinates[i][1][1], 100, 100);
			break;
		} 
	}
	
	 makeMove(board,pcMove, false);
	 findWinner(board);
	 console.log(board);
	 if(theWinner.winner !== 'none')
	 {
		 location.reload();
	 }
};
