let valor = document.querySelector('input[type="range"]');
let anual = document.querySelector('#anual');
let preco = document.querySelector('.preco');

valor.addEventListener('change', alterarValor)
anual.addEventListener('change', alterarValor)

function alterarValor(){
  preco.innerText = valor.value;
  if(anual.checked){
    let valorFinal = valor.value * 0.65;
    console.log(valorFinal)
    preco.innerText = valorFinal
  } 
}
