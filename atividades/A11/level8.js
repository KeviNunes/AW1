function init(robot) {
	
}

function loop(robot) {
	if(robot.info().x < 490)
		robot.move(40);
	else
		robot.jump(10)
}
