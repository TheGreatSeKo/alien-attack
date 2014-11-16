var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var frame = 0;

//"aliensGrid" arr using for more easy manipulation with graphicks of aliens
//(if we want different type of aliens on differend row/columns, or changing pattern of alliens grid)
var aliensGrid = [];
//"aliens" arr using for iterations
var aliens = [];
var bullets = [];

var sprite = {
	//size
	height: 25,
	width: 25,

	//coordinates
	x: 0,
	y: 0,

	//velocity of movement
	vx: 0,
	vy: 0
}


var alienObject = Object.create(sprite);
alienObject.vx = 1;
alienObject.vy = 0.1;
alienObject.image = createImage(alienObject, "images/alien.png");
alienObject.status = 0; // 0, 1 for animation
alienObject.amount = 50;
alienObject.hit = false;

var player = Object.create(sprite);
player.image = createImage(player, "images/player.png");

var bulletObject = Object.create(sprite);
bulletObject.height = 6;
bulletObject.width = 3;
bulletObject.vy = -8;
bulletObject.shot = false;


//initialization
(function startGame() {
	var rows = 5;
	var columns = 10;

	//init aliens
	for (var row = 0; row < rows; row++) {
		aliensGrid[row] = [];
		for (var column = 0; column < columns; column++) {
			var alien = aliensGrid[row][column] = Object.create(alienObject);
			alien.x = 30 + alienObject.width * column + 8 * column;
			alien.y = 30 + alienObject.height * row + 8 * row;			
		}
	}

	//init player
	player.x = Math.floor((canvas.width / 2) - (player.width / 2));
	player.y = canvas.height - 30;
	
})();

(function createAlienArr() {
	for (var row = 0, rows = aliensGrid.length; row < rows; row++) {
		for (var column = 0, columns = aliensGrid[row].length; column < columns; column++) {
			aliens.push(aliensGrid[row][column]);
		}
	}
})();

function createImage(image, src) {
	// uncomment if images do not have time to boot
	// var imageLoadHandler() = function { update(); };
	// image.addEventListener("load", imageLoadHandler, false);
	image = new Image();
	image.src = src;
	return image;		
}