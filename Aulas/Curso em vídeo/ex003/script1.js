var n1 = Number(window.prompt('Digite um número:')) //string convertida para number
var n2 = Number(window.prompt('Digite outro número:')) //string convertida para number
//Utilizamos o comando Number.parseInt para converter dados para números inteiros.
//Utilizamos o comando Number.parseFloat para converter dados para números reais.
//Podemos utilizar somente o Number(n) para que o JS decida o tipo do valor sozinho.
var soma = n1+n2
/*window.alert('A soma dos valores é' + soma) assim o valor é concatenado */
window.alert('A soma dos valores é' + soma)
//number+number para adição
//string+string para concatenação