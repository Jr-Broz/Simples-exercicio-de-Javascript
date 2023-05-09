function calculaMedia(){
let nomeAluno = prompt("Qual o nome do aluno");
 let primeiraNota = +prompt("Qual a primeira nota de " +nomeAluno +"?");
 let segundaNota = +prompt("Além de "+primeiraNota + ",Qual a segunda Nota?");
let media = (primeiraNota + segundaNota) /2;

  "<br>"
document.getElementById("mostrandoNota1").innerHTML = "A primeira nota é " + primeiraNota
"<br>"

document.getElementById("mostrandoNota2").innerHTML = "A segunda Nota é " + segundaNota;
"<br>"

document.getElementById("mostrandoresultado").innerHTML = "A média final é " + media;
  
}//fechando da funcao
