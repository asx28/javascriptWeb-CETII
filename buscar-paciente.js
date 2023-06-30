var botao = document.querySelector("#buscar-paciente")
var campoFiltro = document.querySelector("#filtrar-tabela")

botao.addEventListener("click", function(){
    var filtro = new XMLHttpRequest()
    filtro.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")
    filtro.addEventListener("load", function(){
        console.log(filtro.responseText)
    })
    filtro.send()
})

campoFiltro.addEventListener("input", function(){
    var arrayDePacientes = document.querySelectorAll(".paciente")

    for(var i=0; i<arrayDePacientes.length; i++){
        var paciente = arrayDePacientes[i];
        var tdNome = paciente.querySelector(".info-nome")
        var nome = tdNome.textContent
        var expressao = new RegExp(this.value, "i")
    

        if(!expressao.test(nome)){
            paciente.classList.add("invisivel")
        }else{
            paciente.classList.remove("invisivel")
        }
    }
})


