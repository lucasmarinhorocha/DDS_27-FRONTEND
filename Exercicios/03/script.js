

var produto = {


 Hamburguer : {
        nome : "Hamburguer",
        preço : 25,
        categoria : "Comida"
    },

 Cocacola : {
     nome : "Coca cola",
        preço : 6,
        categoria : "Bebida"
 },
  Sorvete : {
     nome : "Sorvete",
        preço : 10,
        categoria : "creme"
 },

  nome : function(item){
   return this[item].nome
  },
  preco : function(item){
   return this[item].preço
  },
  categoria : function(item){
    return this[item].categoria
  }
}
var cardapio = [

    produto.Hamburguer,produto.Cocacola,produto.Sorvete

]
console.log("ola");

for (let index = 0; index < cardapio.length; index++) {
    
    
    console.log(`Protudo: ${cardapio[index].nome} \nPreço: ${cardapio[index].preço}`);
}

var pedido = prompt("INFORME QUAL PEDIDO VOCE VAI QUERER")
var quantidade = parseInt(prompt("INFORME A QUANTIDADE"))
var registro

switch (pedido){
    case "Hamburguer":
        registro = 0
        break
    case "Coca cola":
        registro = 1
        break
    case "Sorvete":
        registro = 2
        break
}
function calculo(quantidade,registro) {
   return quantidade*cardapio[registro].preço
    
}

todospedidos = {}


console.log(`Protudo: ${cardapio[registro].nome} || Peço total ${calculo(quantidade,registro)}`);
todospedidos.pedido = cardapio[registro]
/*
console.log(cardapio[2]);

console.log(produto.nome("Hamburguer"));
console.log(produto.preco("Hamburguer"));
console.log(produto.categoria("Hamburguer"));
*/
