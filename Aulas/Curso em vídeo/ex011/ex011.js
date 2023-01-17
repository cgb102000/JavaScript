var idade = -1 
if (idade>0 && idade<16){
    console.log(`Não vota!`)

} else if(idade>16 && idade<18){
        console.log(`Voto opcional`)
} else if(idade>=18 && idade <65){
    console.log(`Voto obrigatório`)
} else if(idade>=65 && idade <105){
    console.log(`Voto opcional`)
} else {
    console.log(`Idade não encontrada no banco de dados`)
}

