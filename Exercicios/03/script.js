// Cria um objeto principal chamado 'produto' que armazena os sub-itens do cardápio e funções utilitárias
var produto = {
  // Sub-objeto representando o hambúrguer com suas propriedades básicas
  Hamburguer: {
    nome: "Hamburguer",
    preço: 25,
    categoria: "Comida",
  },
  // Sub-objeto representando a Coca-cola
  Cocacola: {
    nome: "Coca cola",
    preço: 6,
    categoria: "Bebida",
  },
  // Sub-objeto representando o sorvete
  Sorvete: {
    nome: "Sorvete",
    preço: 10,
    categoria: "creme",
  },
  // Função dentro do objeto para buscar o nome de um item dinamicamente usando a chave
  nome: function (item) {
    return this[item].nome;
  },
  // Função para buscar o preço de um item dinamicamente
  preco: function (item) {
    return this[item].preço;
  },
  // Função para buscar a categoria de um item dinamicamente
  categoria: function (item) {
    return this[item].categoria;
  },
};

// Cria um array chamado 'cardapio' reunindo os objetos de produtos para facilitar a listagem indexada
var cardapio = [produto.Hamburguer, produto.Cocacola, produto.Sorvete];

// Exibe a mensagem de boas-vindas no console
console.log("Seja bem-vindo ao nosso restaurante! Me diga o que te interessa em nosso cardápio:");

// Laço 'for' para percorrer cada item do array 'cardapio' e exibi-lo formatado na tela
for (let index = 0; index < cardapio.length; index++) {
  console.log(
    `Produto: ${cardapio[index].nome} \nPreço: R$ ${cardapio[index].preço}`
  );
}

// Inicializa um array vazio para armazenar todos os pedidos que o usuário realizar
var todospedidos = [];

// Variável de controle booleana para manter o loop 'while' rodando ativamente
var escolha = true;

// Loop 'while' que continuará repetindo a pergunta de pedidos até que o usuário decida sair
while (escolha) {
  // Abre uma caixa de diálogo (prompt) para o usuário digitar o nome do produto desejado
  var pedido = prompt("INFORME QUAL PEDIDO VOCÊ QUER (ou digite 'sair'):");

  // Verifica se o usuário cancelou a caixa (null) ou digitou "sair" para encerrar o ciclo
  if (pedido === null || pedido.toLowerCase() === "sair") {
    break; // Interrompe o loop while imediatamente
  }

  // Variável que vai armazenar o índice numérico (posição) do produto dentro do array 'cardapio'
  var registro;

  // Estrutura 'switch' para identificar qual produto o usuário digitou e associar ao índice correto
  switch (pedido) {
    case "Hamburguer":
      registro = 0; // Índice 0 no array cardapio
      break;
    case "Coca cola":
      registro = 1; // Índice 1 no array cardapio
      break;
    case "Sorvete":
      registro = 2; // Índice 2 no array cardapio
      break;
    default:
      // Caso digite um nome inválido, avisa o usuário e pula para a próxima repetição do loop
      alert("Produto não encontrado no cardápio. Tente novamente.");
      continue;
  }

  // Pergunta a quantidade desejada e converte o texto digitado em um número inteiro
  var quantidade = parseInt(prompt("INFORME A QUANTIDADE"));

  // Valida se o valor digitado é um número válido e maior que zero
  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Quantidade inválida.");
    continue;
  }

  // 1. Cria um objeto estruturado representando o item escolhido pelo cliente
  var itemPedido = {
    item: cardapio[registro].nome,          // Salva o nome oficial do produto
    quantidade: quantidade,                 // Salva a quantidade informada
    precoUnitario: cardapio[registro].preço, // Salva o valor unitário atual
    subtotal: calculo(quantidade, registro), // Chama a função para calcular o subtotal deste item
  };

  // 2. Adiciona este objeto de pedido ao final do array 'todospedidos' usando o método push()
  todospedidos.push(itemPedido);
}

// Função auxiliar isolada para calcular o subtotal multiplicando a quantidade pelo preço unitário
function calculo(quantidade, registro) {
  return quantidade * cardapio[registro].preço;
}

// --- ÚLTIMA PARTE: EXIBIÇÃO DO RESUMO DE TODOS OS PEDIDOS ---
console.log("\n--- RESUMO DO SEU PEDIDO ---");

// Verifica se o array de pedidos está vazio (caso o cliente tenha saído sem pedir nada)
if (todospedidos.length === 0) {
  console.log("Nenhum pedido foi realizado.");
} else {
  // Variável acumuladora para somar o valor total de todas as compras realizadas
  var totalGeral = 0;

  // Laço 'for' para percorrer cada item armazenado no array 'todospedidos'
  for (let index = 0; index < todospedidos.length; index++) {
    var pedidoAtual = todospedidos[index];
    
    // Soma o subtotal do item atual ao acumulador 'totalGeral'
    totalGeral += pedidoAtual.subtotal;
    
    // Imprime no console os detalhes do item, quantidade e subtotal individual
    console.log(
      `Item: ${pedidoAtual.item} | Quantidade: ${pedidoAtual.quantidade} | Subtotal: R$ ${pedidoAtual.subtotal}`
    );
  }

  // Exibe o valor final acumulado de toda a compra ao término do loop
  console.log(`\nVALOR TOTAL A PAGAR: R$ ${totalGeral}`);
}