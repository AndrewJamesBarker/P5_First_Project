// a la Sol LeWitt via codecademy, with some tweaks by me.


function setup()
{
  createCanvas(500,500);
 
  background("#EDF2F4");


}
//vertical lines
function draw(){
stroke(0);
strokeWeight(5);
strokeCap(SQUARE);
for(posX = 0; posX<10; posX++){
  line(posX * 25 + 12.5, 0, posX*25 + 12.5, height /2);
}

// circles top left

fill("#D90429");
stroke("#D90429");
for(posX = 0; posX < 10; posX++)
{
  for(posY = 0; posY < 10; posY++)
  circle(posX * 25 + 12.5, posY * 25, 2);
}

// circles top right

fill("#8D99AE");
noStroke();
for(posX = 1; posX < 11; posX++)
{
  for(posY = 0; posY < 10; posY++)
{
  if(posX % 2 === 0){
  circle(posX * 25 + width / 2, posY * 25, 15) 
  } else{
    circle(posX * 25 + width / 2, posY * 25 + 10, 15) 
  }
} 
}

// inner dot

fill("black");
for(posX = 1; posX < 11; posX++)
{
  for(posY = 0; posY < 10; posY++)
  {
    if(posX % 2 === 0){
  circle(posX * 25 + width / 2, posY * 25, 4);
    } else
    {
        circle(posX * 25 + width / 2, posY * 25 + 10, 4);
    }

  }
}

// squares bottom left
fill("#e63946");
for(posX = 0; posX < 10; posX++){
  for(posY = 0; posY < 5; posY++){
    if(posX % 2 === 0){
      square(posX * 25 , posY * 50 + (width / 2 + 25), 25);
    } else {
    square(posX * 25 , posY * 50 + width / 2,25);
    }

  }
}
 
// Diagonal Bottom Right

strokeWeight(10);
stroke("#2B2D42");
strokeCap(ROUND);

for(i = 0; i < 10; i++){
line(width / 2 + 3.5, height - i * 25,width / 2 + i * 25, height);
}

// for(i = 0; i < 10; i++){
// line(width / 2 - 1, height / 2,width / 2 + i * 25, height);
// }

for(i = 0; i < 10; i++){
line(width / 2 + i * 25 + 5, height / 2, width, height - i * 25);
}

strokeWeight(10);
line(width / 2, 0, width / 2, height);
line(0, height / 2, width, height / 2);

}













