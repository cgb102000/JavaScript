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
                document.body.style.backgroundImage = "url('./assets/imagens/bg1.png')";                
                document.getElementById("heading").style.color = "white";
                document.getElementById("heading").style.textShadow = "none"            
        
                
        
        
                
                //criança
            } else if(idade<21){
                img.setAttribute('src', './assets/imagens/jovemm.png')
                document.body.style.backgroundImage = "url('./assets/imagens/bg2.png')";                
                document.getElementById("heading").style.color = "white";
                document.getElementById("heading").style.textShadow = "none"
                //jovem
            } else if(idade >=21 && idade<50){
                //adulto
                img.setAttribute('src', './assets/imagens/adultom.png')
                document.body.style.backgroundImage = "url('./assets/imagens/bg3.png')";
                document.getElementById("heading").style.color = "white";
                document.getElementById("heading").style.textShadow = "1px 1px 1px black"
            } else {
                //idoso
                img.setAttribute('src', './assets/imagens/senhorm.png')
                document.body.style.backgroundImage = "url('./assets/imagens/bg4.png')";
                document.getElementById("heading").style.color = "white";
                document.getElementById("heading").style.textShadow = "1px 1px 1px black"
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade<10){
                img.setAttribute('src', './assets/imagens/criancaf.png')
                document.body.style.backgroundImage = "url('./assets/imagens/bgf1.png')";                
                document.getElementById("heading").style.color = "white";
                document.getElementById("heading").style.textShadow = "none"
                //criança
            } else if(idade<21){
                //jovem
                img.setAttribute('src', './assets/imagens/jovemf.png')
                document.body.style.backgroundImage = "url('./assets/imagens/bgf2.png')";                
                document.getElementById("heading").style.color = "white";
                document.getElementById("heading").style.textShadow = "none"
            } else if(idade>=21 && idade<50){
                
                //adulto
                img.setAttribute('src', './assets/imagens/adultof.png')
                document.body.style.backgroundImage = "url('./assets/imagens/bgf3.png')";                
                document.getElementById("heading").style.color = "white";
                document.getElementById("heading").style.textShadow = "none"
            } else {
                //idoso
                img.setAttribute('src', './assets/imagens/senhoraf.png')
                document.body.style.backgroundImage = "url('./assets/imagens/bgf4.png')";                
                document.getElementById("heading").style.color = "white";
                document.getElementById("heading").style.textShadow = "none"
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
        
    }


}