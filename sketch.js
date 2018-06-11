var backgroundIm;
ACC = 50;
function setup()
{
  createCanvas(windowWidth,windowHeight);
  //frameRate(300)
}

fireworks = [];
function mouseClicked()
{
  if (fireworks.length<10)
  fireworks.push(new FireWork());

  console.log(fireworks)
}
function draw()
{
  background(0);
  for (i =0 ; i< fireworks.length;i++)
  {
    fireworks[i].draw();
    if(fireworks[i].update())
      fireworks.splice(i,1);
  }
}
