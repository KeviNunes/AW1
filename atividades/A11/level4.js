function init(robot){
  // your code here
}

function loop(robot){
	console.log(robot.info().x);
  	(robot.info().x > 393 && robot.info().x < 460) ? robot.jump(10) : robot.move(40);
}
