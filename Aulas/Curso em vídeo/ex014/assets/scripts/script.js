function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente.`)
    } else {
        
        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade<10){
                img.setAttribute('src', './assets/imagens/criancam.png')
                
                //criança
            } else if(idade<21){
                img.setAttribute('src', './assets/imagens/jovemm.png')
                //jovem
            } else if(idade >=21 && idade<50){
                //adulto
                img.setAttribute('src', './assets/imagens/adultom.png')
            } else {
                //idoso
                img.setAttribute('src', './assets/imagens/senhorm.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade<10){
                img.setAttribute('src', './assets/imagens/criancaf.png')
                //criança
            } else if(idade<21){
                //jovem
                img.setAttribute('src', './assets/imagens/jovemf.png')
            } else if(idade>=21 && idade<50){
                //adulto
                img.setAttribute('src', './assets/imagens/adultof.png')
            } else {
                //idoso
                img.setAttribute('src', './assets/imagens/senhoraf.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }


}