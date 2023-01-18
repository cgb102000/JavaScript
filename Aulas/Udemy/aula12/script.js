function criaPessoa (nome,sobrenome,idade){
     return {nome,sobrenome,idade};
}
const pessoa1 = criaPessoa('Caio','Gabriel',23);
const pessoa2 = criaPessoa('Gabriel','Nunes',22);
const pessoa3 = criaPessoa('Brenda','Lee',21);
const pessoa4 = criaPessoa('Miguel','Afonso',16);
const pessoa5 = criaPessoa('João','Pedro',14);

console.log(pessoa1.nome,pessoa2.nome)