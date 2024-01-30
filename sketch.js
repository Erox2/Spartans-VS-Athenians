





let Xpos = 700;
let Ypos = 700;
let Xpos2 = 100;
let Ypos2 = 100;
let avstand;
let avstand2;
let poeng = 0;
let Tx = 400;
let Ty = 400;
let ath;
let bg;
let spar;
let tr;






function setup() {
  createCanvas(800, 800);
  ath = loadImage("ath.png");
  bg = loadImage("bg.png");
  spar = loadImage("spar.png");
  tr = loadImage("tr.png");
}

function draw() {
  image(bg,0,0);
  player1();
  player2();
  kollisjon();
  kollisjon2();
  treasure();
  tekst();
}


function tekst () {
 fill ("red");
  stroke(0);
  strokeWeight(5);
  textSize(25);
  textAlign(CENTER);
  text("Poeng; " + poeng, 400, 100);
  
  if (poeng >=10){
    textSize(50);
    text ("Spartans WIN", 400,400);
    noLoop(); 
  }
  
  if (poeng <= -10) {
    textSize(50);
  text ("Athenians WIN",400,400);
    noLoop();
  
} }
function kollisjon(){
  
  avstand = dist (Xpos, Ypos,  Xpos2, Ypos2);

  if (avstand <= 30) {
    
    farge = "black";
    poeng = poeng - 1;
    Xpos = random (30, 770);
    Ypos = random  (30, 770);
  }
  else {farge = "white";}

  
  
}













function kollisjon2(){
  
  avstand2 = dist (Xpos, Ypos,  Tx, Ty);

  if (avstand2 <= 30) {
    
    farge = "black";
    poeng = poeng + 1;
    Tx = random (30, 770);
    Ty = random  (30, 770);
  }
  else {farge = "white";}

  
  
}



















function treasure(){
  
  
  image(tr, Tx-30, Ty-30)
  
  
  
}



function player1(){
  circle (Xpos, Ypos, 30 );
  
  image(spar, Xpos-30, Ypos-30);
  
  
  
 if (keyCode === RIGHT_ARROW) {Xpos = Xpos +5;}
 if (keyCode === LEFT_ARROW ) {Xpos = Xpos -5;}
  
  if (keyCode === UP_ARROW) {Ypos = Ypos -5;}
  if (keyCode === DOWN_ARROW) {Ypos =Ypos +5;}
  if (keyCode === ENTER) {Xpos = Xpos, Ypos = Ypos}
  
  if (Xpos >=815) {Xpos = -15;}
  if (Xpos <= -16) {Xpos = 814;}
  if (Ypos >= 815) {Ypos = -15;}
  if (Ypos <= -16) {Ypos = 814;}
  
}
function player2(){
  circle (Xpos2, Ypos2, 30 );
  
  image(ath, Xpos2-30, Ypos2-30);
  
  
 if (keyCode === 68) {Xpos2 = Xpos2 +5;}
 if (keyCode === 65 ) {Xpos2 = Xpos2 -5;}
  
  if (keyCode === 87) {Ypos2 = Ypos2 -5;}
  if (keyCode === 83) {Ypos2 =Ypos2 +5;}
  if (keyCode === 32) {Xpos2 = Xpos2, Ypos2 = Ypos2}
  
  if (Xpos2 >=815) {Xpos2 = -15;}
  if (Xpos2 <= -16) {Xpos2 = 814;}
  if (Ypos2 >= 815) {Ypos2 = -15;}
  if (Ypos2 <= -16) {Ypos2 = 814;}
  
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
  
  
  
  
  
}
 
   function keyPressed() {
   if  (keyCode === ENTER)  {
     poeng = 0;
     loop();
   } 
   }
     
     
  

















