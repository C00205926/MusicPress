class MainMenu extends Scene
{
  constructor(title)
  {
    super(title)

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.createDiv("Play");

  }
  createDiv(divId)
  {
    var div = document.createElement("div");
    div.id = divId;
    if(div.id === "Play")
    {
      div.innerHTML = '<img src=\'play.png\'>';
      this.div = div;

      div.style.position = "absolute";
      div.style.left = (this.width/ 2) - 135 + "px";
      div.style.top = (this.height/ 8) + 40 + "px";
    }

  }
  render()
  {
    document.body.style.backgroundColor = "#DDA0DD";

    var canvas = document.getElementById('myCanvas');
    // Assign the canvas an id so we can reference it elsewhere.
    canvas.id = 'myCanvas';
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var ctx = canvas.getContext('2d');
    ctx.font = '48px Agency FB';
    ctx.fillText(this.title, 10, 50);
  }
}
