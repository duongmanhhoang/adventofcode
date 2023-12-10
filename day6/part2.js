const input = `Time:        45     98     83     73
Distance:   295   1734   1278   1210`

const splitInput = input.split(`\n`);
const time = splitInput[0].replaceAll(' ', '').match(/\d+/g);
const distance = splitInput[1].replaceAll(' ', '').match(/\d+/g);
const minSpeed = Math.ceil(distance/time) + 1;
let wtw = 0;

for (let holdTime = 0; holdTime < time; holdTime++) {
  const timeLeft = time - holdTime;

  if (timeLeft * holdTime > distance) wtw += 1;

  console.log(wtw, holdTime, holdTime < distance);
}

console.log(wtw);
