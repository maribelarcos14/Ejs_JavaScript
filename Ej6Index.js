'use strict';

const scores = [6,7,2,9,3,4,5,8,2,5,7];
//Hay más de una forma de resolver el ejercicio. Aquí hay dos. 

//Usando FOR
let acc=0;
for(let i=0; i<scores.length;i++) {
    acc += scores [i];
};
console.log('Con el bucle FOR la puntuación final es' + acc);

//USANDO FOR...OF
let puntuacion=0
for(let score of scores){
    puntuacion += score;
};
console.log('Con el bucle FOR OF la puntuación final es' + puntuacion);