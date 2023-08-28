
var cnv;

function setup() {
  cnv = createCanvas(600, 50);
  cnv.parent('about-me');
}

function draw() {

  function displayEye(x, y, d)
    {
      fill("white"); 
      strokeWeight(2);
      stroke("hotpink")
      
      circle(x, y, d);
      
      let angle = atan2(mouseY - y, mouseX - x);
      
      let pd = 0.3 * d;
      let pr = 0.4 * d;
      
      let x2 = x + pd * cos(angle);     
      let y2 = y + pd * sin(angle);
      
      fill("hotpink");
      circle(x2, y2, pr);
        
    }
      displayEye(height/2+105,width/20, 25);
      displayEye(height/2+70,width/20, 25); 

  }
