class Matbit2{
  constructor(){
    this.x = Math.random()*width*0.8+width*0.1;
    this.y = Math.random()*height*0.8+height*0.1;
    this.radius = 30;
    this.farge = `yellow`;
  }
  tegn(){
    fill(this.farge);
    circle(this.x, this.y, this.radius);
    imageMode(CENTER);
    image(strong, this.x, this.y);
  }
}
