window.addEventListener("keydown", function(e) {
	if (e.keyCode === 37) {
		player.vx = -5;
	}
	if (e.keyCode === 39) {
		player.vx = 5;
	}
});

window.addEventListener("keyup", function(e) {
	if (e.keyCode === 37) {
		player.vx = 0;
	}
	if (e.keyCode === 39) {
		player.vx = 0;
	}
	if (e.keyCode === 32) {
		bulletObject.shot = false;
	}
});

window.addEventListener("keypress", function(e) {
	if (Date.now() - bulletObject.lastShot > 250) { // 250 - fire rate
		if (e.keyCode === 32 && !bulletObject.shot) {
			bulletObject.shot = true;
			var shot = Object.create(bulletObject);
			shot.x = Math.floor(player.x + (player.width / 2));
			shot.y = player.y;
			bullets.push(shot);
		}
		bulletObject.lastShot = Date.now();
	}
});