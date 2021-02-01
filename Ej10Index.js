const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const number2 = number.filter(number => number %2 === 0);
console.log(number2);

const number3 = number.filter(number => number %2 !== 0);
console.log(number3);
