function render() {

	//aliens render
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0, max = aliens.length; i < max; i++) {
			context.drawImage(
				alienObject.image,
				aliens[i].width * aliens[i].status, 0, alienObject.width, alienObject.height,
				aliens[i].x, aliens[i].y, aliens[i].width, aliens[i].height			
			);
	}

	//player render
	context.drawImage(
		player.image,
		0, 0, player.width, player.height,
		player.x, player.y, player.width, player.height
	);


	//bullet render
	for (var i = 0, max = bullets.length; i < max; i ++) {
		context.fillStyle = "yellow";
		context.fillRect(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height);
	}
}