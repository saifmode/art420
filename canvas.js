let canvas = document.querySelector('canvas'); // set up canvas
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;
let cellWidth = 55;
let cellHeight = 34;
let rows = canvas.height / cellWidth;
let cols = canvas.width / cellHeight;
let padding = 5;
const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
// shapes and movement
	// grid

		// for (let i = 0; i < rows; i++) {
		// 	for (let j = 0; j < cols; j++) {
		// 		c.save();
		// 		c.translate(j * cellWidth, i * cellHeight);
		// 		c.beginPath()
		// 		c.rect(padding, padding, cellWidth - padding, cellHeight - padding);
		// 		c.fill();
		// 		c.closePath();
		// 		c.restore();
		// 	}
		// }

	// circular motion
		// this.update = (particles) => {
		// 	this.radians += this.velocity.x;
		// 	this.x = centrePoint + Math.cos(this.radians) * this.orbit;
		// 	this.y = centrePoint + Math.sin(this.radians) * this.orbit;
		// }

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
});	



let x, y, a, b;

function init() {
	x = 0;
	y = 0;
	c.fillStyle = 'rgba(0,0,0,0.01)';
	c.fillRect(0,0,canvas.width, canvas.height);
}
let myColor;
let ticker = 0;
function animate() {

	requestAnimationFrame(animate);

	if (ticker % 2 === 0) {
			a = canvas.width - x;
			b = (canvas.height) - cellHeight - y;
			// let randomSkew = document.getElementById('random-skew');
			// let randomValue = randomSkew.value / 10;
			myColor = colorArray[ticker % (colorArray.length - 1)];
			c.save();
			c.beginPath();
			if (Math.random() < 0.5) {
				c.moveTo(x, y);
				c.lineTo(x + cellWidth, y + cellHeight)
			} else {
				c.moveTo(x + cellWidth, y);
				c.lineTo(x, y + cellHeight)
			}
			c.lineWidth = 3;
			c.shadowBlur = 5;
			c.shadowColor = myColor;
			c.strokeStyle = myColor;
			c.stroke();		
			c.closePath();
			c.restore();

			c.save();
			c.beginPath();
			if (Math.random() < 0.5) {
				c.moveTo(a, b);
				c.lineTo(a + cellWidth, b + cellHeight)
			} else {
				c.moveTo(a + cellWidth, b);
				c.lineTo(a, b + cellHeight)
			}
			c.lineWidth = 3;
			c.shadowBlur = 5;
			c.shadowColor = myColor;
			c.strokeStyle = myColor;
			c.stroke();		
			c.closePath();
			c.restore();



			x += cellWidth;
		
		if (x >= canvas.width) {	
			x = 0;
			y += cellHeight;
		}

		if (y >= canvas.height - cellHeight) {
			x = 0; 
			y = 0;
			// c.fillRect(0,0,canvas.width, canvas.height);
		}
	}

	ticker++;
	console.log(ticker)
	c.fillRect(0,0,canvas.width, canvas.height);
}

init()
animate()
