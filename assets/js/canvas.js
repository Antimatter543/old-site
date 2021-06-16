import utils, { randomIntFromRange } from './utils'
const canvas = document.getElementById('myCanvas')
canvas.width = innerWidth / 5;
canvas.height = innerHeight / 5;
const c = canvas.getContext('2d')

// canvas.width = innerWidth
// canvas.height = innerHeight

const mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
	mouse.x = event.clientX
	mouse.y = event.clientY
})

addEventListener('resize', () => {
	canvas.width = innerWidth/ 5
	canvas.height = innerHeight/ 5

	init()
})

// // Objects
// class Particle {
// 	constructor(x, y, radius, color) {
// 		this.x = x
// 		this.y = y
// 		this.radius = radius
// 		this.color = color
// 		this.radians = 0
// 		this.velocity = 0.05;
// 	}

// 	draw() {
// 		c.beginPath()
// 		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
// 		c.fillStyle = this.color
// 		c.fill()
// 		c.closePath()
// 	}

// 	update() {
// 		// Uses particle's original positioning.
// 		this.radians += this.velocity
// 		// this.x = x
// 		this.x = x + Math.cos(this.radians) * 100; // the x in here breaks the class for some reason so doing it function way.
// 		this.draw()
// 	}
	
// }

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

	for (let i = 0; i < 50; i++) {
		particles.push(new Particle(canvas.width / 2, canvas.height / 2, 10, 'blue'))
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate)
	c.clearRect(0, 0, canvas.width, canvas.height)

	//   In the particles array, for each item (particle), call the update particle.
	particles.forEach(particle => {
		particle.update()
	})
}

init()
animate()
