//Descobrindo o IMC (Índice de massa corporal)

const nome = 'Maria';
const idade = 66;
const sexo = 'Feminino';
const peso = 78;
const altura = 1.65;

let imc =  peso / (altura * altura);
let anoNascimento = 2023-idade;




console.log(`Eu me chamo ${nome}, atualmente tenho ${idade} anos de idade, sou do sexo ${sexo} e peso ${peso}Kg.`);
console.log(`O meu IMC é ${imc}`)




if(imc<18.5){
    console.log(`Classificação: Magro(a).`);
} else if (imc>=18.5 && imc<=24.9){
    console.log(`Classificação: Normal.`);
} else if (imc>=25 && imc <=29.9){
    console.log(`Classificação: Sobrepeso`);
} else if (imc>=30 && imc<=39.9){
    console.log(`Classificação: Obeso(a).`);
} else if (imc>=40){
    console.log(`Classificação: Obesidade grave!.`);
}

console.log(`Eu nasci em ${anoNascimento}.`)







