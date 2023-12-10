const input = `Time:        45     98     83     73
Distance:   295   1734   1278   1210`

const splitInput = input.split(`\n`);
const time = splitInput[0].replaceAll(' ', '').match(/\d+/g);
const distance = splitInput[1].replaceAll(' ', '').match(/\d+/g);
let wtw = 0;

for (let holdTime = 0; holdTime < time; holdTime++) {
  if ((time - holdTime) * holdTime > distance) wtw ++;
}

console.log(wtw);
