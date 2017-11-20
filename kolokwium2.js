var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var shift = 0;
setInterval(function() {
  c.beginPath();
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < 120; i += 5) {
    draw(i + shift);
  }
  c.stroke();
  shift += 20;
  shift %= 360;
}, 100);


function draw(i) {
  var x = Math.cos(i * (Math.PI / 180)) * 200 + 600;
  var y = Math.sin(i * (Math.PI / 180)) * 200 + 300;

  var a = i % (360 / 4) * 0.5;

  var xSquare = x - a / 2; 
  var ySquare = y - a / 2; 

  c.rect(x - a / 2, y - a / 2, a, a);
}
