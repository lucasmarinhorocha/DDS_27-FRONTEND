/*console.log("AOBA")

// for = ára / durante

for(var i = 0; i < 10; i++ ){
    console.log("grande 🤖" , i);
    
}
var con = 1
while(con < 30){
    console.log("meu chara")
    con = con +5
} 
console.log("fim");

var lista = ['arroz',6,true,"outro",7.7,false,["sim",[false]]]
console.log(lista);

 // funções do array

console.log(lista[3]);


console.log(lista.length); //tamanho do array

var times = ["São Paulo","Gama","Santos","Real Madrid"]

for (let index = 0; index < times.length; index++) {
  const element = times[index];
    }
  */


    var frutas = ["Pera","Goiaba","Abacaxi",'Melancia',"Melão","Morango"]

        //ARRAY ORIGINAL

    console.log(frutas);
    
    // PRA ADIÇÃO DE ELEMENTOS
    //push - adiciona no fim da fila
    
    frutas.push("Maça")
    
    console.log(frutas);

    // unshift - adiciona no inicio do array
    frutas.unshift("Maracujá")
    console.log(frutas);
    
    // remoção de elementos - pop: remove o ultimo elemento
    frutas.pop()
    console.log(frutas);

    frutas.unshift("Banana")

    // shift - remove o inicio do array
    var exPrimeiraFruta = frutas.shift()
    console.log(exPrimeiraFruta)

    // includes - descobrir se há um valor específico nesse array
    console.log(frutas.includes("Pitu"));
    console.log(frutas.includes("Maracujá"));

    //sort - ordenar o array
    frutas.sort()
    console.log(frutas);
    
    // reverse - inverter o array
    frutas.reverse()
    console.log(frutas);
    
// converte para string    
console.log(frutas.toString())
//junta o array e troca o separador
console.log(frutas.join(" "));

// Slice - copia
//qual indice começa e quantos copia 
var parteCopiada = frutas.slice(2,4)
console.log(parteCopiada);


//Splice - 
//REMOVER

var removidos = frutas.slice(1,2)
console.log(removidos);

//ADICIONAR SEM SUBSTITUIR

frutas.splice(2,0,"Abacate","Laranja","Caju")
console.log(frutas);

//SUBSTITUINDO
frutas.splice(2,2,"Mouse","Beterraba","Cenoura")
console.log(frutas);

