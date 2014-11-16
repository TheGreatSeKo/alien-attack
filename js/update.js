(function update() {
	requestAnimationFrame(update, canvas);

	//update player coordinates
	player.x += player.vx;
	if (player.x > (canvas.width - (30 + player.width))) {
		player.x = canvas.width - (30 + player.width);
	}
	if (player.x < 30) {
		player.x = 30;
	}

	//update aliens coordinates
	var maxX = 0;
	var minX = canvas.width;
	for (var i = 0, max = aliens.length; i < max; i++) {
			// aliens[i].status = Math.floor(Math.random() * 2);

			aliens[i].x += aliens[i].vx;
			aliens[i].y += aliens[i].vy;

			maxX = Math.max(maxX, aliens[i].x);
			minX = Math.min(minX, aliens[i].x);
	}
	if (maxX > (canvas.width - (30 + alienObject.width)) || minX < 30) {
		for (var i = 0, max = aliens.length; i < max; i++) {
				aliens[i].vx = -(aliens[i].vx);
		}
	}

	//update bullet coordinates
	for (var i = 0, max = bullets.length; i < max; i ++) {
		bullets[i].y += bullets[i].vy;
		if (bullets[i].y < 0) {
			bullets.splice(i, 1);
			i -= 1;
			max -= 1;
		}
	}

	//bullet hit detection
	for (var i = 0, max1 = bullets.length; i < max1; i++) {
		for (var j = aliens.length - 1; j >= 0; j--) {
			if (bullets.length != 0) {  //prevent error of last bullet hit
				if (bullets[i].x < (aliens[j].x + aliens[j].width) && bullets[i].x > (aliens[j].x)) {
					if (bullets[i].y > (aliens[j].y) && bullets[i].y < (aliens[j].y + aliens[j].height)) {
						bullets.splice(i, 1);
						max1 -= 1;
						aliens[j].status = 2;
						aliens[j].hit = true;
						if (aliens[j].hit) {
							(function destroyAlien(j) {
								setTimeout(function(){aliens.splice(j, 1)}, 50);
							})(j);
						}
					}	
				}
			}
		}
	}

	render();
})();