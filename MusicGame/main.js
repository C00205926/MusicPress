
//var game;

var gameNs = {};

function main()
{
  game = new Game();
  gameNs.game = game;
  this.titleScreen = new TitleScreen();


  initCanvas();
  draw();
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  document.addEventListener("touchstart", onTouchStart);
}

// Note how the sceneManager argument is first, followed by the event parameter
function ClickHandler (sceneManager, e)
{
   sceneManager.jumpToNextScene();	// Use a method on the sceneManager
}

function onTouchStart(e)
{
 touches = e.touches;

 // Print out (x,y) co-ords of touch: touches[0].clientX contains
 //  the x position.
 //console.log(touches[0].clientX);
 startX = touches[0].clientX;
 startY = touches[0].clientY;

 gameNs.swipeStartX = startX;
 gameNs.swipeStartY = startY;

 gameNs.time1 = new Date()
 titleScreen.checkCollision(startX,startY);
 console.log(startX, startY);
}

//function SelectAudio()
//{
//  gameNs.soundManager.playSound('Select')
//}
//function createDivSelect(divSelect)
//{
//  var div = document.createElement("div");
//  div.id = divSelect;
//  div.innerHTML = '<img src=\'Assets/select.png\'>';
//  div.addEventListener("touchstart", SelectAudio);
//  document.body.appendChild(div);
//}

function initCanvas()
{
	// Use the document object to create a new element canvas.
	var canvas = document.createElement("canvas");
	// Assign the canvas an id so we can reference it elsewhere.
	canvas.id = 'myCanvas';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	// We want this to be a 2D canvas.
	var ctx = canvas.getContext("2d");
	// Adds the canvas element to the document.
	document.body.appendChild(canvas);
}

function draw()
{
  console.log(this.game);
  this.game.render();
  //mainMenu.render();
  //sceneManager.render();
}
