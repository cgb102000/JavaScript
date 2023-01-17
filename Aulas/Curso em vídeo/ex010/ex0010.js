function calcular(){

    var txtvel = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtvel.value)
    res.innerHTML =  `Sua velocidade é de <strong>${vel}Km/h</strong>`
    if(vel>60) {
        res.innerHTML += <p>Você está MULTADO por excesso de velocidade!</p>
    }
    res.innerHTML = `Dirija sempre com cinto de segurança!.`


}