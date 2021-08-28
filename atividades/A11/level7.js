function init(robot) {
}

function loop(robot) {
	robot.info().x > 200 && robot.info().x < 250 ? robot.jump(10) : robot.move(40)
}
