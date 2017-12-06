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

    for(var i = 0; i < this.titles.length; i++)
    {
      if(this.titles[i] == title)
      {
        this.index = i;
      }
    }
    this.currentScene = this.scenes[this.index];
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
    this.render();
  }

  render()
  {
    var canvas = document.getElementById('myCanvas');
    // Assign the canvas an id so we can reference it elsewhere.
    canvas.id = 'myCanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  	var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    this.currentScene = this.scenes[this.index];
    this.currentScene.render();
  }
}
