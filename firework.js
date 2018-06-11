function FireWork()
{
  if (random(0, 1) > 0.8)
    this.trail = true;
  else
    this.trail = false;

  if (random(0, 1) > 0.5)
    this.particuleTrail = true;
  else
    this.particuleTrail = false;

  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b =  random(0, 255);
  this.color = color(this.r,this.g,this.b);
  this.particulesColor = color(this.r,this.g,this.b);
  if (this.color.levels[0] > 10 && this.color.levels[0] < 240)
    this.particulesColor.levels[0] = this.color.levels[0] + random(-10, 10);
  if (this.color.levels[1] > 10 && this.color.levels[1] < 240)
    this.particulesColor.levels[1] = this.color.levels[1] + random(-10, 10);
  if (this.color.levels[2] > 10 && this.color.levels[2] < 240)
    this.particulesColor.levels[2] = this.color.levels[2] + random(-10, 10);

  this.chanceExplo = 0;
  this.explosed = false;
  this.done = false;
  this.particules = [];
  this.nb_particules = random(15, 30);
  this.base = new Particule([random(0, windowWidth), windowHeight], [random(-20, 20), random(-100, -400)], true, this.trail, this.color, this.particulesColor)

  this.draw = function()
  {
    if (this.explosed)
    {
      for (k = 0; k < this.nb_particules; k++)
        this.particules[k].draw();
    }
    else
      this.base.draw();
  }
  this.update = function()
  {
    if (this.explosed)
    {
      for (k = 0; k < this.nb_particules; k++)
        if(this.particules[k].update())
          return true;
    }
    else
    {
      this.base.update();
      this.chanceExplo += random(0.5, 1);
      if (this.chanceExplo >= 100 || this.base.pos[1]<100)
      {
        this.explosed = true;
        for (k = 0; k < this.nb_particules; k++)
          this.particules.push(new Particule([this.base.pos[0],this.base.pos[1]], [random(-100, 100), random(-100, 100)], false, this.particuleTrail,this.particulesColor,color(255,255,255) ));
      }
      return false;
    }
  }
}
