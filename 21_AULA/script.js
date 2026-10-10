console.log("SHAZAM");

var musica = ["Pera ai", "se..", "Segredos"]
var cantores = ["Cirilo","Djavan","Frejat"]

for (let index = 0; index < musica.length; index++) {
    console.log(musica[index], "-", cantores[index]);
        
}
// OBJETO
var filme = {
    //"cheva" : "valor"
    titulo : "Rei Leão",
    genero : "Animação",
    AnoLan : 1994

}

console.log(filme);

console.log(filme.AnoLan);
console.log(filme.titulo);
console.log(filme.genero);

console.log(`O filme: ${filme.titulo} foi lançado em ${filme.AnoLan}`);

console.log(`Genero: ${filme["genero"]}`);

var intervalo = {
    horario : 20,
    tempo : "20 min",
    paciencia : 2.0,
    acaba : 20.20
}

console.log(`O intervalo começa as ${intervalo.horario} e acaba as ${intervalo.acaba}, sendo assim : ${intervalo.tempo} de duração com paciencia media de: ${intervalo.paciencia}`);

var garrafa = {

}
console.log(garrafa);
garrafa.cor = "azul"
console.log(garrafa);
garrafa.cor = "vermelho"
console.log(garrafa);



/*
var chave = prompt("informe a chave")
garrafa[chave] = prompt("informe a propriedade")
console.log(garrafa);
*/

var leao = {
    //propriedades
    nome : "simba",
    temPelo : true,
    peso : 60,

    // metodo
    andar : function(){
        console.log("andei");   
    },
    falar : () => {
        console.log("Sou um leão");    
    }
}

console.log(leao);
console.log(leao.andar());

leao.falar()
