//window : janela do navegador
/*
window.alert()
window.prompt()*/


console.log(document);
console.log(document.head);
console.log(document.body);

//secção 1
//Seleciona elementos pela tag
var titulos = document.getElementsByTagName("h1")
console.log(titulos);

//Selecionar elementos pela class
var paragrafo = document.getElementsByClassName("para")
console.log(paragrafo);

//Seleciona elemento por ID

var especifico = document.getElementById("p3")
console.log(especifico);

//Alteração de estilos
//pego pelo id

especifico.style.backgroundColor = "green"
especifico.style.color = "yellow"

// Pela Class
paragrafo[0].style.backgroundColor = "pink"

// pela TAG

titulos[2].style.backgroundColor = "orange"

// seção 2
// função ativada, mas criada pelo javascript
function cliquei() {
    console.log("SAAAAAAAAAAAAAAI");
    
}

// função ativada, mas criada pelo javascript, via eventListener
var cliques = 0
document.getElementById("btnCliqueDuplo").addEventListener("dblclick",()=> {
   cliques++
    
    console.log(cliques);
    
} )

//botão clicavel, que altere varios
document.getElementById("shazam").addEventListener("click", ()=>{
    for(var i =0; i < titulos.length; i++){
        titulos[i].style.backgroundColor = "red"
        titulos[i].style.color = "yellow"
        titulos[i].style.fontSize = "90px"
    }
})

// USO do this

function quemFoi(elementoQueChamou) {
    console.log(elementoQueChamou);
    
}

59
70
71
72
73
74
75
76
77
78
79
30
31
32
33
84
35

// SEÇÃO 3
// ALTERA O TEXTO
document.getElementById("criaTexto").addEventListener("click", () => {

// INNERTEXT - TEXTCONTENT - ALTERA O TEXTO DO ELEMENTO
document.getElementById("textoCriado").innerText = "Fale que ia mudar, toma ai"
})
// ALTERA O HTML
document.getElementById("criaHtml").addEventListener("click", () =>{

// INNERHTML - ALTERA O ELEMENTO
document.getElementById("vazia").innerHTML +=

"<h2> AHAHAHAHHAHAHAH </h2>"})
