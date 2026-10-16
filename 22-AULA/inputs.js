/*
click — quando clica em um elemento.
dblclick — quando dá duplo clique.
input — quando o valor de um campo muda durante a digitação.
change — quando o valor de um campo é alterado e confirmado.
submit — quando envia um formulário.
mouseover — quando o mouse entra sobre um elemento.
mouseout — quando o mouse sai de um elemento.
mousemove — quando o mouse se movimenta sobre um elemento.
mousedown — quando pressiona um botão do mouse.
mouseup — quando solta um botão do mouse.
keydown — quando pressiona uma tecla.
keyup — quando solta uma tecla.
focus — quando um elemento recebe foco.
*/

// =====================================================

// EVENT CHANGE
document.getElementById("campoChange").addEventListener("change", () => {
  // Pega o que foi digitado
  const textoDigitado = document.getElementById("campoChange").value;

  // Atualiza o texto do elemento com ID "resultadoChange"
  document.getElementById("resultadoChange").innerText = "Você digitou: " + textoDigitado;
});

// Evento input
// altera quando o usuario altera o valor da caixa
document.getElementById("campoInput").addEventListener("input", function (){

    // pega o valor digitado pelo usuario
    const textoDigitado = this.value

     document.getElementById("resultadoInput").innerText = textoDigitado;
});


//================================================================
//================================================================
//===============================================================

// guarda todo o HTML do formulario
const formulario = document.getElementById("formJogador");

// guarda o html da lista de jogadores (que se inicia vazia)
const lista = document.getElementById("listaJogadores");

// Adicionado o parâmetro 'evento' nos parênteses
formulario.addEventListener("submit", function (evento) {
  // Impede o recarregamento da página ao enviar o formulário
  evento.preventDefault(); 

  // verifica o conteudo digitado nas caixinhas e guarda em variaveis
  const inputNome = document.getElementById("nome").value;
  const inputPosicao = document.getElementById("posicao").value;
  const inputCamisa = document.getElementById("camisa").value;
  const inputPais = document.getElementById("pais").value;
  const inputHumor = document.getElementById("humor").value;

  const jogador = {
    nome: inputNome,
    posicao: inputPosicao,
    camisa: inputCamisa,
    pais: inputPais,
    humor: inputHumor
  };

  console.log(jogador);

  //Chama a funçao
  AdicionarJogador(jogador)

  // Resea o formulario depois de enviar
  formulario.reset()
});


//função para criar um card

function AdicionarJogador(JogadorAtual){

  //cria elemento
  const card = document.createElement("div")
  //cria os elementos do card

  const titulo = document.createElement("h4")
  const textoPosicao = document.createElement("p")
  const textoCamisa = document.createElement("p")

  //preencher os elemtenos com os valores do objeto
  titulo.textContent = JogadorAtual.nome
  textoCamisa.textContent = "Posição "+JogadorAtual.posicao
  textoPosicao.textContent = "Camisa "+JogadorAtual.camisa

  //Construo o card
card.appendChild(titulo)
card.appendChild(textoPosicao)
card.appendChild(textoCamisa)

// adiciona o card, como filho da lista de jogadores
lista.appendChild(card)
}