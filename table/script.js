const nomepets = ["Garrosh", "Hanna", "Frodo", "Marelão"];
const racas = ["Gato", "Cachorro", "Porquinho da Índia"];

let linhas=0;



function deletar() {
    var x = document.getElementById("petsTable");
    x.deleteRow(1);
  // REMOVE PRIMEIRA POSIÇÃO DA TABELA
}


    
  function adicionar() {

    let linha = document.createElement("TR");
    linha.setAttribute("id", "myTr");


    let col1 = document.createElement("TD");
    let nomepet = document.createTextNode(nomepets.sort(function(a, b){return 0.5 - Math.random()})[0]);
    col1.appendChild(nomepet);
 

    let col2 = document.createElement("TD");
    let raca = document.createTextNode(racas.sort(function(a, b){return 0.5 - Math.random()})[0]);
    col2.appendChild(raca);
    
    linha.append(col1,col2)
    document.getElementById("petsTable").append(linha);


}