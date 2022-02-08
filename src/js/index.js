
let posicao = 0;
let pontos = 0;
//pontuacao();
function pontuacao() {
  document.getElementById("pontos").innerHTML = pontos;
}
function verificaResposta() {
  var getSelectedValue = document.querySelector('input[name="option"]:checked');
  if (!getSelectedValue) {
    alert("Deve selecionar uma opcão");
  } else {
    mostraResposta();
  }
}
function mostraResposta() {
  if (document.getElementById('option-1').checked) {
    document.getElementById('block-1').style.border = '3px solid limegreen' // opcao correta
    document.getElementById('result-1').style.color = 'limegreen'
    document.getElementById('result-1').innerHTML = 'Correcto!'
    pontos += 20
    pontuacao();
  }
  if (document.getElementById('option-2').checked) {
    document.getElementById('block-2').style.border = '3px solid red'
    document.getElementById('result-2').style.color = 'red'
    document.getElementById('result-2').innerHTML = 'Incorrecto!'
  }
  if (document.getElementById('option-3').checked) {
    document.getElementById('block-3').style.border = '3px solid red'
    document.getElementById('result-3').style.color = 'red'
    document.getElementById('result-3').innerHTML = 'Incorrecto!'
  }
  if (document.getElementById('option-4').checked) {
    document.getElementById('block-4').style.border = '3px solid red'
    document.getElementById('result-4').style.color = 'red'
    document.getElementById('result-4').innerHTML = 'Incorrecto!'
  }
}

