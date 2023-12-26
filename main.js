alert("Hello World!");

const numberOne = Number(prompt("Digite o Primeiro número:"));
const numberTwo = Number(prompt("Digite o segundo número:"));

alert(`a soma entre ${numberOne} + ${numberTwo} = ${numberOne + numberTwo} `);
alert(`a soma entre ${numberOne} - ${numberTwo} = ${numberOne - numberTwo} `);
alert(`a soma entre ${numberOne} * ${numberTwo} = ${numberOne * numberTwo} `);
alert(`a soma entre ${numberOne} / ${numberTwo} = ${numberOne / numberTwo} `);


const value = prompt("Digite um valor:");

if (isNaN(value)) {
  alert("Não é um número");
} else {
  alert("É um número");
}


const isString = "Oi";

if (typeof isString == 'string') {
  console.log("É um astring");
} else {
  console.log("Não é uma string");
}


const numberPar = Number(prompt("Digite um número para descobrir se ele é par ou ímpar:"));

if ((numberPar % 2) == 0) {
  alert("É número par");
} else {
  alert("É um número ímpar");
}