var nome = window.prompt('Qual é seu nome?:')
 //Utilizamos o .length para que o JS descreva quantas letras tem aquela string
document.write(`<h2>seu nome tem ${nome.length} letras<h2> <br>`) //Podemos utilizar tags dentro do script

document.write(`Seu nome em maiusculas fica assim ${nome.toUpperCase()} <br>`)

document.write(`Seu nome em minusculas fica assim ${nome.toLowerCase()}`)
