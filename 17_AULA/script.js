// Console log - mostra mensagnes na tela
console.log("Não");
console.log(5 + 3);

// CAIXA DE ALERTA

// alert("ESTOU AQUI")

// VARIAVEIS

var nome = "Cristiano"; //String
var numero = 7; // int
var saldo = 2.1; // double
var dale = true; // boolean

// descobre o tipo da variavel
console.log(typeof dale);

console.log("variavel", nome);
console.log("variavel", saldo);
console.log("variavel", numero);
console.log("variavel", dale);

// OUTROS TIPOS DE VARIAVEL

var nulo = null;
var indefinido = undefined;

// OPERADORES ARITMETICOS

var a = 10,
  b = 5;

console.log("SOMA", a + b);
console.log("SUBT", a - b);
console.log("MULT", a * b);
console.log("DIVI", a / b);
console.log("MODULO", a % b);
console.log(
  "---------------------------------------------------------------------",
);

// LOGICOS
var x = 60,
  y = 20,
  z = "60";

console.log(x > y);
console.log(x < y);
console.log(x >= z);
console.log(z <=x);
console.log(x == y);
console.log(x != y);
// COMPARA O TIPO DO VALOR
console.log(x === z);
console.log(x !== z);

// desvios condicionais

var vivo = true

if(vivo){
    console.log("estou vivo")
} else if (vivo == undefined) {
console.log("nao tão vivo");

}
else{
    console.log("mortinho");
    
}
// switch case 

var camisa = "Marrom"

switch (camisa) {
    case "Preto":
            console.log("CAMISA DA SABRINA CARPENTER");
            

        break;

    case "Branca" :
        console.log("Voce ganhou, um lenço grande com 3 furos branco");
            
 case "Vermelha" :
        console.log("VOCE GANHOU UMA FERRARI");
        
        break;

    default:
        console.log("BAH MEU");
                
}

// PROMPT - INTERAGE COM O USUÁRIO E COLETA UM VALOR



var pet = prompt("QUAL O SEU PET FAVORITO NO MUNDO DOS FILMES")
console.log("seu pet favorito é o ",pet);
