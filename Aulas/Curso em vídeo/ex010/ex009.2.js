function verificar(){

    var pais = window.document.querySelector('input#pais')
    var res = window.document.querySelector('div#res')
    res.innerHTML = `Então você mora no ${pais} `
    if(pais==Brasil) {
        res.innerHTML += <p>Você é brasileiro!</p>
    } else{
        res.innerHTML += <p>Você é estrangeiro!</p>
    }

    
}
