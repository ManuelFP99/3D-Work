let img;

function setup() {
 canvas = createCanvas(windowWidth, windowHeight, WEBGL);  
 canvas.position (0, 0);

}
    
function draw() {
  background("darkblue");


  push()
  translate(200, 140, 0);
  rotateX(millis()/1000); 
  texture(img);  
  box(170);
  pop();

  push();
  translate(200, -150, 0);
  normalMaterial();
  rotateY(millis()/1000); 
  rotateX(millis()/1000); 
  cylinder(100, 90);
  pop();


  push();
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 255, 255, locX, locY, 50);


translate(-400, -150, 0);
  ambientMaterial(0, 0, 255); 
  specularMaterial(128);
  shininess(80);
  noStroke(); 
  rotateX(millis()/1000); 
  cone(130, 170);
  pop(); 

  push();
  translate(200, -150, 0);
  ambientLight(255, 255, 0); //
  ambientMaterial(0, 265,0); //
  noStroke();
  rotateX(millis()/1000); 
  torus(200, 10);
  pop();


}






