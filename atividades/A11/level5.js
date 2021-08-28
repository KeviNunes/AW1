function init(robot) {
	// your code goes here
}

function loop(robot) {  
  	robot.move(40);
 	if (360 < robot.info().x && robot.info().x < 500 || 560 < robot.info().x && robot.info().x < 760) 
      	robot.jump(10);
}
