var currentNumberWrapper = document.getElementById('numeroAtual')
currentNumberWrapper.style.color='black'

var currentNumber = 0;

function adicionar() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;



}
function subtrair() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    


}
