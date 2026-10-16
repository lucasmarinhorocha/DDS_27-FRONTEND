var produto = {
  Hamburguer: {
    nome: "Hamburguer",
    preço: 25,
    categoria: "Comida",
  },

  Cocacola: {
    nome: "Coca cola",
    preço: 6,
    categoria: "Bebida",
  },
  Sorvete: {
    nome: "Sorvete",
    preço: 10,
    categoria: "creme",
  },

  nome: function (item) {
    return this[item].nome;
  },
  preco: function (item) {
    return this[item].preço;
  },
  categoria: function (item) {
    return this[item].categoria;
  },
};
var cardapio = [produto.Hamburguer, produto.Cocacola, produto.Sorvete];
console.log("ola");

for (let index = 0; index < cardapio.length; index++) {
  console.log(
    `Protudo: ${cardapio[index].nome} \nPreço: ${cardapio[index].preço}`,
  );
}
todospedidos = [];
var escolha = true;
while (escolha) {
  var pedido = prompt("INFORME QUAL PEDIDO VOCE VAI QUERER");

  var registro;
  if (pedido === null || pedido.toLowerCase() === "sair") {
    break; // Interrompe o loop while imediatamente
  }
  var contagem = 0;
  switch (pedido) {
    case "Hamburguer":
      registro = 0;
      contagem++;
      break;
    case "Coca cola":
      registro = 1;
      contagem++;
      break;
    case "Sorvete":
      registro = 2;
      contagem++;
      break;
    default:
      escolha = false;
      continue;
  }

  var quantidade = parseInt(prompt("INFORME A QUANTIDADE"));

  // 1. Cria o objeto do pedido atual
  var itemPedido = {
    item: cardapio[registro].nome,
    quantidade: quantidade,
    precoUnitario: cardapio[registro].preço,
    subtotal: calculo(quantidade, registro),
  };

  // 2. Adiciona o objeto no final do array todospedidos
  todospedidos.push(itemPedido);
}

function calculo(quantidade, registro) {
  return quantidade * cardapio[registro].preço;
}

console.log(
  `Protudo: ${cardapio[registro].nome} || Peço total ${calculo(quantidade, registro)}`,
);

console.log(todospedidos);
var total = 0
for (let index = 0; index < todospedidos.length; index++) {
  total += todospedidos[index].subtotal;

  console.log(`TOTAL: ${total}`);
}

/*
console.log(cardapio[2]);

console.log(produto.nome("Hamburguer"));
console.log(produto.preco("Hamburguer"));
console.log(produto.categoria("Hamburguer"));
*/
