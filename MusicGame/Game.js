

class Game
{
	constructor()
	{
		this.init();

		//sceneManager = gameNs;
		this.sceneManager = new SceneManager();

		this.titleScreen = new TitleScreen('Title')
		this.menuScreen = new MainMenu('Menu');
	  this.gameScreen = new GameScreen('GameScreen');

		this.sceneManager.createScene(this.titleScreen);
		this.sceneManager.createScene(this.menuScreen);
		this.sceneManager.createScene(this.gameScreen);

		this.sceneManager.jumpToScene('Title');
	}


	init()
	{
	  console.log("Initialising game");

	}
	render()
	{
		console.log("Game Rendered");
		this.sceneManager.render();
	}
}
