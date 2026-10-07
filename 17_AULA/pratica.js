var caixa1 = Number(prompt("TAMANHO DA PRIMEIRA CAIXA"));
var caixa2 = Number(prompt("TAMANHO DA SEGUNDA CAIXA"));
var caixa3 = Number(prompt("TAMANHO DA TERCEIRA CAIXA"));


var caso



// 1 VIAGEM
// && = e, | | = ou
if((caixa1 < caixa2 && caixa2 < caixa3) || (caixa1 + caixa2 < caixa3)) {
console.log("1 viagem necessária");

} else if ((caixa1 < caixa2 && caixa2 == caixa3) || (caixa1==caixa2 && caixa2 < caixa3) )
    {
    console.log("2 viagens necessarias")
} else {
    console.log("3 viagens necessarias")
}