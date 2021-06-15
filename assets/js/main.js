const canvas = document.querySelector('canvas')
// canvas just variable name. Could name it 'c', etc.
// Innerwidth/height is a window object.
canvas.width = innerWidth/10
canvas.height = innerHeight/10

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