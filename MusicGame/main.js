
//var game;

var gameNs = {};

function main()
{
  game = new Game();
  gameNs.game = game;
  this.titleScreen = new TitleScreen();
  this.menuScreen = new MainMenu();


  this.clicked = true;


  initCanvas();
  draw();
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  document.addEventListener("touchstart", onTouchStart);
  document.addEventListener("touchmove", onTouchMove, {passive:false});
  document.addEventListener("touchend", onTouchEnd);
}

// Note how the sceneManager argument is first, followed by the event parameter


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
 console.log(gameNs.game.sceneManager.index);
if(gameNs.game.sceneManager.index === 0)
{
  titleScreen.checkCollisionTitle(startX,startY);
}

else if(gameNs.game.sceneManager.index === 1)
{
  menuScreen.checkCollisionMenu(startX,startY);
}
{

}

 //this.clicked = ture;

 console.log(startX, startY);
}


function onTouchMove(e)
{
 e.preventDefault();
 var touches2 = e.changedTouches;
 // Print out (x,y) co-ords of touch: touches[0].clientX contains
 //  the x position.
 var ctx = document.getElementById("myCanvas").getContext("2d")

 endX= touches2[0].clientX;
 endY = touches2[0].clientY;

 //console.log(touches2[0].clientX);
 ctx.beginPath();
 ctx.moveTo(startX,startY);	//the previous touch
 ctx.lineTo(endX,endY);	//the current touch
 ctx.stroke();

 startX = touches2[0].clientX;
 startY = touches2[0].clientY;



}



function onTouchEnd(e)
{
var ctx = document.getElementById("myCanvas").getContext("2d")
var time2 = new Date()
var timeTaken = time2 - gameNs.time1;

// Calcuale distance of the swipe
//var distance = Math.sqrt(((endX - gameNs.swipeStartX) * (endX - gameNs.swipeStartX))
 //+ ((endY - gameNs.swipeStartY)*(endY - gameNS.swipeStartY)));

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

  return canvas;
}

function draw()
{
  console.log(this.game);
  this.game.render();
  //mainMenu.render();
  //sceneManager.render();
}
