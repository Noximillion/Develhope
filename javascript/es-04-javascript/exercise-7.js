function sumUntil(maxValue) {
  let i = 0
  let x = 0
  while (i < maxValue) {
    i++;
    x += i
  }
  return x;
}

/* function sumUntil(maxValue) {
  let x=0
  for (i=0; i <= maxValue; i++) {
    x += i;
  }
  return x
} */

console.log(sumUntil(5)); 