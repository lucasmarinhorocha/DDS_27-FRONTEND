var A = prompt("TAMANHO DA PRIMEIRA CAIXA");
var B = prompt("TAMANHO DA SEGUNDA CAIXA");
var C = prompt("TAMANHO DA TERCEIRA CAIXA");


var caso

if (C >( B + A)) {
  caso = 1
} else if (C > B) {
  caso = 2;
} else if (C > A) {
 caso = 3;
} else {
  caso = 4;
}





switch (caso){


case 4:
        console.log("viagens 3");
        break;
    case 2 , 3:
        console.log("viagens 2");
        break;
    case 1 :
        console.log("viagnes 1")
        break
    default:
        console.log("incorreto");

}