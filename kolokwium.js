var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function rotateSquare(x, y, width, angle) {
  c.translate(x + width / 2, y + width / 2);
  c.rotate(angle * Math.PI / 180);
  c.rect(-width / 2, -width / 2, width, width);
  // c.rect(x, y, width, width);
  c.resetTransform();
}


var angle = 0;
setInterval(function() {
  c.beginPath();
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < 360; i += 5) {
    draw(i, angle);
  }
  angle += 3;
  angle %= 360;
  c.stroke();
}, 10);

function draw(i, angle) {
  var x = Math.cos(i * (Math.PI / 180)) * 200 + 600;
  var y = Math.sin(i * (Math.PI / 180)) * 200 + 300;

  var a = i % (360 / 4) * 0.5;

  var xSquare = x - a / 2; 
  var ySquare = y - a / 2; 

  rotateSquare(xSquare, ySquare, a, angle);
}
