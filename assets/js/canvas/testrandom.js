var canvas = document.querySelector('canvas');
// https://stackoverflow.com/questions/25311019/apply-gravity-between-two-or-more-objects-in-html5-canvas/25313006 try to add gravity between objects.
canvas.width = innerWidth;
canvas.height = innerHeight;

var c = canvas.getContext('2d');



// c.fillRect(100,100, 500, 500);

// for (var i = 0; i < 50; i++) {
    //     var x = Math.random() * 50;
    //     var y = Math.random() * 50;
    //     c.beginPath();
    //     c.arc(x,y, 30, 0, Math.PI * 2, false);
    //     c.strokeStyle = 'blue';
    //     c.stroke();
    
    // }
    /// helpers//
    function hexToRgbA(hex){
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
        }
        throw new Error('Bad Hex');
    }
    
    // hexToRgbA('#fbafff')
      ///

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius = 5;

var colorArray = [
    '#000000',
    '#22222',
    '#484848',
    '#333',
];

var colorRect = [
    '#c7ecee',
    '#95afc0',
    '#6ab04c',
    '#f9ca24',
]
window.addEventListener('mousemove', 
function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse);

})

window.addEventListener('click',
function(event) {
    // console.log('oo')
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    rectangles.push(new Rectangle(mouse.x, mouse.y, dx, dy, 50, 50));
    // console.log(rectangles)
})

window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})

function AngleBetween(x1, y1, x2, y2) {
    // Returns angle from Point 1 (x1,y2) to Point 2 (x2,y2).
    gradient = (y2-y1)/(x2-x1)
    angle = Math.atan(gradient)

    return angle 

}

class Rectangle {
    constructor(x, y, dx, dy, width, height) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.width = width;
        this.height = height;
        this.colour = colorRect[Math.floor(Math.random() * colorRect.length)];

        this.draw = function () {
            c.fillStyle = this.colour;
            c.fillRect(this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height);


        };
        this.update = () => {
            // Movement: Be still if you want to make them kinda like black holes.
            // if (this.x + (this.width / 2) > innerWidth || this.x - (this.width / 2) < 0) {
            //     this.dx = -this.dx;
            // }
            // if (this.y + (this.height / 2) > innerHeight || this.y - (this.height / 2) < 0) {
            //     this.dy = -this.dy;
            // }

            // // var angle = Math.atan2(y-mouse.y, x-mouse.x)
            // // console.log('bro', angle);
            // this.x += this.dx;
            // this.y += this.dy;

            // Draw 
            this.draw();
        };

    }
}
class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.colour = colorArray[Math.floor(Math.random() * colorArray.length)];

        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            // c.strokeStyle = 'blue';
            // c.stroke();
            c.fillStyle = this.colour;

            // c.fillStyle = hexToRgbA(this.colour);
            // console.log(hexToRgbA(this.colour))
            // c.fillStyle = 'rgba(111,111,111, 0.5)'
            c.fill();
        };


        this.update = function(rectangleArray) {

            for (let i = 0; i < rectangleArray.length; i++) { 
                // var fakedx = rectangleArray[i].x - this.x
                // var fakedy = rectangleArray[i].y - this.y 
                // var angle = Math.atan2(fakedy, fakedx);
                // this.x += fakedx * Math.cos(angle) * 0.05
                // this.y += fakedy * Math.sin(angle) * 0.05 
            }
            // Checks if hit walls, and if so change direction of velocity.
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            // var angle = Math.atan2(y-mouse.y, x-mouse.x)
            // console.log('bro', angle);
            this.x += this.dx;
            this.y += this.dy;
            // console.log("yoo", angle, Math.cos(angle))
            // this.x += x * Math.cos(angle);
            // this.y += y * Math.sin(angle);
            // Checks for mouse interactivity and do funky stuff. Absolute used so it's just distance stuff.
            if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 500) {
                // By the way, just having it on the x axis (i.e don't take into account mouse y stuff, is kinda fuckin epic.
                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
            }
            else if (this.radius > this.minRadius) {
                this.radius -= Math.random();
            }


            this.draw();
        };
    }
}

var circleArray = [];


function init() {
    
    
    // For mouse clicking rectangle things.
    rectangles = [];

    //   Circle generation code
    circleArray = [];
    for (var i = 0; i < 200; i++) {
        var radius = Math.random() * 10 + 1
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 5 + rectangles.length;
        var dy = (Math.random() - 0.5) * 5 + rectangles.length;
    
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }


}

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(255, 255, 255, 0.45)"; 
    c.fillRect(0,0, innerWidth, innerHeight)
    // c.clearRect(0,0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update(rectangles);
    }
    for (var i = 0; i < rectangles.length; i++) {
        rectangles[i].update();
    }

}


init();
animate();


// Implementing gravity where the everything is attracted to rectangle (except other rectangles for now).
// For each rectangle:
    // Calculate distance from the center of Rectangle to Center of Circle.
    // Change dx,dy of circle to go towards rectangle. ->
    // { You do that by: rect.x - circle.y,  }