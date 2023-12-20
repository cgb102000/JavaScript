function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora =  //data.getHours() 
    const minute = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos.`
    if (hora >= 0 && hora < 12){
        img.src = 'assets/imagens/manha.png'       //bom dia
        document.body.style.background = 'gray'         
        document.body.style.backgroundImage = 'url("https://cafeviagem.com/wp-content/uploads/2022/04/cafe-da-manha-em-Garopaba-00001-1280x704.jpg")'  ; 
        
    } else if (hora >= 12 && hora < 18){
        img.src = 'assets/imagens/tarde.png'    //boa tarde
        document.body.style.background = 'orange'
        document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/462023/pexels-photo-462023.jpeg?cs=srgb&dl=pexels-pixabay-462023.jpg&fm=jpg")'
        

        
        
    }else{
        img.src = 'assets/imagens/noite.png'    //boa noite
        document.body.style.background = 'black';
        document.body.style.backgroundImage = 'url("https://www.aluralingua.com.br/artigos/assets/night.jpg")';
        

    }



}

