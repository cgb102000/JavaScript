function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora =  12 //data.getHours()
    const minute = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos.`
    if (hora >= 0 && hora < 12){
        img.src = 'assets/imagens/manha.png'       //bom dia
        document.body.style.background = 'gray'
        
    } else if (hora >= 12 && hora < 18){
        img.src = 'assets/imagens/tarde.png'    //boa tarde
        document.body.style.background = 'orange'
    } else {
        img.src = 'assets/imagens/noite.png'    //boa noite
        document.body.style.background = 'black'
    }



}

