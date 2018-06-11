function Particule (pos, speed,base,trail,cP,cT)
{
  this.pos = pos;
  this.speed = speed;
  this.lifespan = 100;

  this.time = millis();

  this.opa = random(150,230) //Should be given with the firework

  this.trail = [];
  if(base)
    this.sWeight = random(5,10);
  else
    this.sWeight = random(1,4);

  this.draw = function()
  {
    strokeWeight(this.sWeight);

    if(base)
    {
      strokeWeight(6);
      stroke(cP.levels[0],cP.levels[1],cP.levels[2]);
    }
    else
    {
      strokeWeight(2);
      stroke(cP.levels[0],cP.levels[1],cP.levels[2],map(this.lifespan,100,0,this.opa,0));
    }
    point(pos[0],pos[1]);


    stroke(cT.levels[0],cT.levels[1],cT.levels[2],map(this.lifespan,100,0,this.opa-20,0));
    noFill();
    beginShape();
    for (j = 0 ; j <this.trail.length;j++)
    {
      curveVertex(this.trail[j][0],this.trail[j][1]);
    }
    endShape();
  }

  this.update = function()
  {
    t_now = millis();
    deltaT = t_now - this.time;
    deltaT /=1000;

    if (trail)
      this.updateTrail();

    this.pos[0] += this.speed[0] * deltaT;
    this.pos[1] += this.speed[1] * deltaT + 0.5 * ACC * pow(deltaT,2);

    this.speed[1] += ACC * deltaT;

    this.time = t_now;
    this.lifespan --;
    if(this.lifespan <=0 )
      return true;
    return false;
  }
  this.updateTrail = function()
  {
    if(this.trail.length <30)
      this.trail.push([this.pos[0],this.pos[1]]);
    else
    {
      this.trail.shift();
      this.trail.push([this.pos[0],this.pos[1]]);
    }
  }

}
