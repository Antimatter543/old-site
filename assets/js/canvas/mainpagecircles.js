const canvas = document.querySelector('canvas')
// canvas just variable name. Could name it 'c', etc.
// Innerwidth/height is a window object.

canvas.width = innerWidth/2
heightRatio = 0.4
canvas.height = canvas.width * heightRatio

var c = canvas.getContext('2d');
//  could have named c as ctx instead but fuck it.
// // c stands for context. c becomes some superobject thingo that we can draw everything with.

// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100,100, 100, 100);
// c.fillStyle = 'rgba(0,255,0,0.5)';
// c.fillRect(400,300, 100, 100);
// c.fillStyle = 'rgba(0,0,255,0.8)';
// c.fillRect(700,200, 100, 100);

// //  Coords relative to top of screen.
// console.log(canvas)

// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400,300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// c.beginPath();
// c.lineTo(500,300);
// c.lineTo(500,500);
// c.stroke();

// // Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.stroke();

// Start from i =0, and run this until i< 3 (i.e until i=3). To increment i, we do i++ (i.e add one each time). In total, this runs 3 times.
for (var i = 0; i < 10; i++) {
	var x = Math.random() * canvas.width
	var y = Math.random() * canvas.height
	var colour = "#" + ((1<<24)*Math.random() | 0).toString(16)
	c.beginPath();
	c.arc(x, y, 5, 0, Math.PI * 2, false);
	c.strokeStyle = colour;
	c.fillStyle = colour;
	c.stroke();
	console.log("Printed this thing at", x, y)
}

// Fancy shit

// Helpers
function randomIntFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)]
  }
  
  function distance(x1, y1, x2, y2) {
	const xDist = x2 - x1
	const yDist = y2 - y1
  
	return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
  }

window.addEventListener('resize', function() {
	canvas.width = innerWidth/2
	canvas.height = canvas.width * heightRatio
	init();

})
  /// Real shit

function Particle(x,y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;
	this.radians = Math.random() * Math.PI * 2;
	this.velocity = 0.05;
	this.distanceFromCenter = {
		x: randomIntFromRange(50,120),
		y: randomIntFromRange(50,120)};

this.draw = () => {
	c.beginPath();
	c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	c.fillStyle = this.color;
	c.fill();
	c.closePath();
}

this.update = () => {
	// Uses particle's original positioning.
	this.radians += this.velocity;
	// this.x = x
	this.x = x + Math.cos(this.radians) * this.distanceFromCenter.x;
	this.y = y + Math.sin(this.radians) * this.distanceFromCenter.y;
	this.draw();
}

}

// Implementation
let particles
function init() {
	
particles = []
c.clearRect(0, 0, canvas.width, canvas.height)
for (let i = 0; i < 100; i++) {
	var colour = "#" + ((1<<24)*Math.random() | 0).toString(16)
	particles.push(new Particle(canvas.width / 2, canvas.height / 2, 10, colour))
}
}

// Animation Loop
function animate() {
requestAnimationFrame(animate)
// c.fillStyle = 'rgba(255,255,255,0.05';
// c.fillRect(0,0< canvas.width, canvas.height);
c.clearRect(0, 0, canvas.width, canvas.height)

//   In the particles array, for each item (particle), call the update particle.
particles.forEach(particle => {
	particle.update()
})
}

init()
animate()