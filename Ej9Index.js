const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];

const topics2 = topics.map(eachTopic => eachTopic.toUpperCase());
topics2.reverse();
console.log('topics', topics);
console.log('topics2', topics2);

const topics3 = topics.map(eachTopic => eachTopic.toLowerCase());
topics3.shift();
console.log('topics', topics);
console.log('topics3', topics3);