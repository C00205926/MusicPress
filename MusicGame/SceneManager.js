class SceneManager
{
  constructor()
  {
    this.currentScene = null;
    this.scenes = {};
    this.titles = [];
    this.index = -1;
    this.numberOfScences = -1

  }

  createScene(scene)
  {
    this.numberOfScences++;
    this.titles.push(scene.title);
    this.scenes[this.numberOfScences] = scene;

  }

  jumpToScene(title)
  {
    console.log("jump called");
    console.log(title);
    for(var i = 0; i < this.titles.length; i++)
    {
      if(this.titles[i] == title)
      {
        console.log(this.titles[i]);
        this.index = i;
      }
    }
    this.currentScene = this.scenes[this.index];
    console.log("this = " + this);
    this.render();
  }

  jumpToNextScene()
  {
    console.log(this.currentScene);
    this.index++;
    if(this.index > this.numberOfScences)
    {
      this.index = 0
    }
    this.currentScene = this.scenes[this.index];
    console.log("Jump to next called");
    console.log("this = " + this);
    this.render();
  }

  render()
  {
    console.log("render called");
    //var canvas = document.getElementById('myCanvas');
    // Assign the canvas an id so we can reference it elsewhere.
    var ctx = document.getElementById('myCanvas').getContext("2d");
  	//var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, ctx.width, ctx.height);


    var currentScene = this.scenes[this.index];
    currentScene.render();
  }
}
