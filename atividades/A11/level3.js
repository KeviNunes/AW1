function init(robot) {
	robot.jumpNext = true;
}

function loop(robot) {
	if (robot.jumpNext) 
		robot.action = {type: 'jump', amount: 10};
	else 
		robot.action = {type: 'move', amount: 40};
  
	robot.jumpNext = !robot.jumpNext
}
