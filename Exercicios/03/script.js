

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

/*
console.log(cardapio[2]);

console.log(produto.nome("Hamburguer"));
console.log(produto.preco("Hamburguer"));
console.log(produto.categoria("Hamburguer"));
*/
