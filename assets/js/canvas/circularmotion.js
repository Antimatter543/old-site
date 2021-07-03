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
  /// Start of actual code  below

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2
}
const colors = [
	'#00bdff',
	'#4d39ce',
	'#088eff',
]
// Event Listeners
addEventListener('mousemove', (event) => {
	mouse.x = event.clientX
	mouse.y = event.clientY
	console.log(mouse.x, mouse.y)
})

addEventListener('resize', () => {
	canvas.width = innerWidth
	canvas.height = innerHeight

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
		this.distanceFromCenter = randomIntFromRange(2,10)
		this.lastMouse = {x: x, y: y};

		
		this.update = () => {
			const lastPoint = {x: this.x, y:this.y}; // gets last point bnefore anything is edited (used ion draw).
			// Uses particle's original positioning. Move points over time.
			this.radians += this.velocity;

			// Drag effect
			this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
			this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;
			// this.x = x
			this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter
			this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter
			
			this.draw(lastPoint);
		}
		
		this.draw = function(lastPoint) {
			c.beginPath();
			c.strokeStyle = this.color;
			c.lineWidth = this.radius;
			c.moveTo(lastPoint.x, lastPoint.y);
			c.lineTo(this.x, this.y);
			c.stroke();
			c.closePath();
		}
}

// Implementation
let particles
function init() {
	particles = []

	for (let i = 0; i < 50; i++) {
		const radius = (Math.random() * 2) + 1
		particles.push(new Particle(innerWidth / 2, canvas.height / 2, radius, randomColor(colors)))
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate)
	c.fillStyle = 'rgba(255,255,255, 0.05';
	c.fillRect(0,0, canvas.width, canvas.height)

	//   In the particles array, for each item (particle), call the update particle.
	particles.forEach(particle => {
		particle.update()
	})
}

init()
animate()
