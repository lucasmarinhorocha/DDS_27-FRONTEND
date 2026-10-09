console.log("oi");

//funções

function teste(){
    console.log("eu funciono");
    
}

// execuntando
teste()
// com retorno e parametro

function soma( n1, n2){
    return n1 + n2
}
console.log(soma(3,9));

// mostra o texto da função sem executar
console.log(soma);

function media(n1,n2){
    let resultado = soma(n1,n2)/2
    return resultado

}

console.log(media(5,10));

// função anonima

var oi = function (){
    console.log("oi");
    
}
//mostra a função
console.log(oi);
// apenas guarda o texto da função
oi
// executa a funçao
oi()

// Arrow function

const multiplicar = (x,y) => {
    
return x*y
}

console.log(multiplicar(8,9));


// Mais menor ainda
// Com somente uma linha de retorno, o return pode ser omitido tmb
const dobro = numero => numero*2
console.log(dobro(33.5));

var pedido = prompt("informe um numero")

const div = (numero) => {
    return numero /2
}
console.log(div(pedido));



