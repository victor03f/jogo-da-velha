let button, quebraLinha, jogada = 1, Vencedor = 0
let tabuleiro = new Array(3)
for (let i = 0; i < tabuleiro.length; i++) {
    tabuleiro[i] = new Array(3)
}
for (let i = 0; i < tabuleiro.length; i++) {
    quebraLinha = document.createElement('br')
    document.body.append(quebraLinha)
    for (let j = 0; j < tabuleiro[i].length; j++) {
        button = document.createElement('button')
        button.setAttribute('type', 'button')
        button.setAttribute('id', 'bt' + i + "" + j)
        button.setAttribute('class', 'btJogo' + i)
        button.setAttribute('onclick', 'marca' + i + "" + j + "()")
        button.append(document.createTextNode(""))
        document.body.append(button)
    }
}

function generateMarcaFunctions() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            window['marca' + i + j] = function() {
                marcaCasa('bt' + i + j);
            }
        }
    }
}
generateMarcaFunctions();

function marcaCasa(nomeBotao) {

    if (jogada % 2 == 0) {
        document.getElementById(nomeBotao).innerText = "O"
        document.getElementById(nomeBotao).style.color = "blue"
    } else {
        document.getElementById(nomeBotao).innerText = "X"
        document.getElementById(nomeBotao).style.color = "black"
    }
    document.getElementById(nomeBotao).disabled = true
    
    jogada++
if(jogada > 5){
    encerraJogo()
}
if(jogada > 9 ){
    alert("Deu velha!")
}
}
function encerraJogo() {
if (document.getElementById('bt00').innerText == document.getElementById('bt01').innerText
&& document.getElementById('bt01').innerText == document.getElementById('bt02').innerText
&&document.getElementById('bt00').innerText != ""){
    alert("jogo finalizado \n Vencedor:"+ document.getElementById("bt00").innerText)
    Vencedor++
 }
 if (document.getElementById('bt10').innerText == document.getElementById('bt11').innerText
 && document.getElementById('bt11').innerText == document.getElementById('bt12').innerText
 &&document.getElementById('bt10').innerText != ""){
     alert("jogo finalizado \n Vencedor:"+ document.getElementById("bt10").innerText)
     Vencedor++
  }
  if (document.getElementById('bt20').innerText == document.getElementById('bt21').innerText
&& document.getElementById('bt21').innerText == document.getElementById('bt22').innerText
&&document.getElementById('bt20').innerText != ""){
    alert("jogo finalizado \n Vencedor:"+ document.getElementById("bt20").innerText)
    Vencedor++
 }
 if (document.getElementById('bt00').innerText == document.getElementById('bt10').innerText
&& document.getElementById('bt10').innerText == document.getElementById('bt20').innerText
&&document.getElementById('bt00').innerText != ""){
    alert("jogo finalizado \n Vencedor:"+ document.getElementById("bt00").innerText)
    Vencedor++
 }
 if (document.getElementById('bt01').innerText == document.getElementById('bt11').innerText
&& document.getElementById('bt11').innerText == document.getElementById('bt21').innerText
&&document.getElementById('bt01').innerText != ""){
    alert("jogo finalizado \n Vencedor:"+ document.getElementById("bt01").innerText)
    Vencedor++
 }
 if (document.getElementById('bt02').innerText == document.getElementById('bt12').innerText
&& document.getElementById('bt12').innerText == document.getElementById('bt22').innerText
&&document.getElementById('bt02').innerText != ""){
    alert("jogo finalizado \n Vencedor:"+ document.getElementById("bt02").innerText)
    Vencedor++
 }
 if (document.getElementById('bt00').innerText == document.getElementById('bt11').innerText
&& document.getElementById('bt11').innerText == document.getElementById('bt22').innerText
&&document.getElementById('bt00').innerText != ""){
    alert("jogo finalizado \n Vencedor:"+ document.getElementById("bt00").innerText)
    Vencedor++
 }
 if (document.getElementById('bt02').innerText == document.getElementById('bt11').innerText
 && document.getElementById('bt11').innerText == document.getElementById('bt20').innerText
 &&document.getElementById('bt02').innerText != ""){
     alert("jogo finalizado \n Vencedor:"+ document.getElementById("bt02").innerText)
     Vencedor++
  }
}