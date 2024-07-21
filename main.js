alert ("Hello World!")
//----------------------------------
let nOne = prompt("Digite o primeiro valor")
let nTwo = prompt("Digite o segundo valor")
alert (Number(nOne) + Number(nTwo))
//---------------------------------
let value1 = prompt("Digite um valor para saber se ele é um numero")
let numero = Number(value1)

if (typeof numero === 'number' && !isNaN(numero)){
  alert("Esse valor é um número")
} else {
  alert("Esse valor não é um número")
}
//------------------------------------
let value2 = prompt("Insira um valor para saber se ele é uma string")

if (typeof value2 === 'string') {
  alert("É uma string")
} else {
  alert("Não é uma string")
}
//------------------------------------
let value3 = prompt("Digite um valor para saber se ele é do tipo BOOLEAN") 

if (value3 == 'boolean') {
  alert ("É um boolean")
} else {
  "não é um boolean"
}
//------------------------------------
let value1 = prompt("Digite o primeiro valor")
let value2 = prompt("Digite o segundo valor")

numero1 = (Number(value1))
numero2 = (Number(value2))

if (!isNaN(numero1) && !isNaN(numero2)) {
  let resultado = (numero1 - numero2)
  alert("O resultado será: " + resultado)
} else {
  alert("Não foi possível realizar a operação :(")
}
//------------------------------------
let value1 = prompt("Digite o primeiro valor")
let value2 = prompt("Digite o segundo valor")

numero1 = (Number(value1))
numero2 = (Number(value2))

if (!isNaN(numero1) && !isNaN(numero2)) {
  let resultado = (numero1 * numero2)
  alert("O resultado será: " + resultado)
} else {
  alert("Não foi possível realizar a operação :(")
}
//------------------------------------
let value1 = prompt("Digite o primeiro valor")
let value2 = prompt("Digite o segundo valor")

numero1 = (Number(value1))
numero2 = (Number(value2))

if (!isNaN(numero1) && !isNaN(numero2)) {
  let resultado = (numero1 - numero2)
  alert("O resultado será: " / resultado)
} else {
  alert("Não foi possível realizar a operação :(")
}
//------------------------------------
let value1 = prompt("Digite o primeiro valor")
let value2 = prompt("Digite o segundo valor")

numero1 = (Number(value1))
numero2 = (Number(value2))

if (!isNaN(numero1) && !isNaN(numero2)) {
  let resultado = (numero1 - numero2)
  alert("O resultado será: " + resultado)
} else {
  alert("Não foi possível realizar a operação :(")
}
//------------------------------------
let number1 = prompt("Digite um valor para aebr se ele é par ou ímpar")

let value1 = Number(number1)

if (value1 % 2 === 0) {
  alert(value1 + " é par")
} else {
  alert(value1 + " é ímpar")
}
