var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", interatividadeDoBotao); //interatividade do botão

function interatividadeDoBotao(event){
    event.preventDefault(); //evitar que a função aconteça sem perceber
    //console.log("Botão foi clicado.");
    var form  = document.querySelector("#form-cadastrar");

    //1 - Extrair informações do input
    var paciente = obterPacienteDoFormulario(form)

    //2 - criar a linha da tabela (tr)
    var pacienteTr = montaTr(paciente)

    //3 - Trazer a tabela existentedo HTML para o JS
    var tabela = document.querySelector("#tabela-pacientes")

    //4 - Anexar linha pronta na tabela existente (anexar a tr na tabela)
    tabela.appendChild(pacienteTr)

    form.reset()
    
}


function obterPacienteDoFormulario(formulario){
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaIMC(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr")

    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd.textContent = paciente.nome
    pesoTd.textContent = paciente.peso
    alturaTd.textContent = paciente.altura
    gorduraTd.textContent = paciente.gordura
    imcTd.textContent = paciente.imc

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr

}




