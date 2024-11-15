alert("Boas vindas ao jogo do numero secreto");
let numeroMax = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1); //'let' cria uma variável
let chute;
let tentativas = 1;
//enquanto o chute for diferente do numero secreto continuar o loop
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um numero entre 1 e ${numeroMax}`); // prompt e tipo um input

  if (numeroSecreto == chute) { // a condição sempre dentro ()
    break; // Vai parar caso o numero secreto for igual ao numero do chute
  } else {
    if (numeroSecreto > chute) {
      alert(`O numero secreto e maior que ${chute}`);
    } else {
      alert(`O numero secreto e menor que ${chute}`);
    }
    tentativas++;

  }
}
// uma forma simplificada do uso do if e else como ler: tentativas e maior q um? se sim "tentativas" caso não(:) tentativa
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Isso ai! Você acertou! ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);



//----------------------------------------------------------------------------
//Alura:
//template strings=>e um print formatado substituir " " por `` colocar ${variável}
//diferente: != igual: ==
//para atribuir mais um: ++
//console.log printa oque está entre ()
//parseInt(): Recebe uma string e retorna como um numero inteiro
//Para gerar um numero aleatório usamos "Math.random()" caso eu queria gerar um numero aleatório de tres dígitos multiplicamos por 100