var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", interacao)

function interacao(event){
    event.target.parentNode.remove()
    //console.log("tabela")
}