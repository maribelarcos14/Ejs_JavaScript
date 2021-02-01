const times = [60, 75, 79, 80, 55, 59];

const resultado = times.reduce ((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(resultado);

const media = resultado/times.length;
console.log('media', media);

