
    






    function opcoes(){
       
        console.log("As opções são:", this.tamanho.toString());
        
        }
    





    var produto1 = {
    nome :"Coca",
    categoria : "pedra",
    quantidade : 12,
    tamanho : [600,1000,1500,2000],
    descricao : function (){
        console.log( `A ${this.nome} é da categoria ${this.categoria} ?`);
        // o this referencia o proprio objeto
    },
    verTamanho : opcoes
}


var produto2 = {
    nome :"Coxinha",
    categoria : "Salgado",
    quantidade : 60,
    tamanho : ["P","M","G"],
    descricao : function (){
        console.log(`A ${this.nome} é da categoria ${this.categoria} ?`);
        
    },
        verTamanho : opcoes
}



produto1.descricao()
produto1.verTamanho()
produto2.verTamanho()
/*
var aluno = {
    nome : "Lucas",
    anoEscolar : "7º",
    Turma : "C",
    notas : [6,7,8],
    media : function() {
   

        return (this.notas[0]+this.notas[1]+this.notas[2])/3
    }
}
console.log(aluno.media());
 */