function carregar() {
    let tema = prompt(` Escolha um tema, pelo número. \n 1-Escuro \n 2-Claro  `)
    const data = new Date()
    const hora = data.getHours()
    const msg = document.getElementById('msg')

    
   if(tema=='1'){
    document.body.style.backgroundColor='black'
    document.body.style.color='gray'
    document.h1.style.color='white'
    
   } else if(tema=='2'){
    document.body.style.backgroundColor = 'white'
    document.body.style='black'
    
   } else{
    window.alert(`Cor invalida.`)
    XMLHttpRequestUpload
    window.history.go(); // recarrega a página atual
   }



}