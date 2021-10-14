var s1, s2, s3, s4
var sprites = []
function setup() {
  createCanvas(400,400);
  s1 = createSprite(30, 50, 30, 30)
  s2 = createSprite(201, 41, 25, 25)
  s3 = createSprite(123, 56, 50, 50)
  s4 = createSprite(286, 12, 81, 88)
  sprites = [s1, s2, s3, s4]
}

function draw() 
{
  background(30);
  drawSprites()
}

 

