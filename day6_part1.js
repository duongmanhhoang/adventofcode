const input = `Time:        45     98     83     73
Distance:   295   1734   1278   1210`

const splitInput = input.split(`\n`);
const times = splitInput[0].match(/\d+/g);
const distances = splitInput[1].match(/\d+/g);
let result = 1;

times.forEach((time, index) => {
	const distance = distances[index];
  	const minSpeed = Math.ceil(distance/time);
 	let wtw = 0;
  
  	for (let holdTime = minSpeed; holdTime < distance; holdTime++) {
      	const timeLeft = time - holdTime;
    	
      	if (timeLeft * holdTime > distance) wtw += 1;
    }
  
  	result = result * (wtw ?? 1);
})

console.log(result);
