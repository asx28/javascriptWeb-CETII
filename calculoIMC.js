var titulo = document.querySelector(".titulo");
titulo.textContent = "Projeto SENAC 2023";

//array de todos os pacientes
var arrayDePacientes = document.querySelectorAll(".paciente");
console.log(arrayDePacientes);

//          Posição:  0         1       2         3          4
//arrayDePacientes=["Paulo", "João", "Erica", "Douglas", "Tatiana"]

for(var i = 0; i<arrayDePacientes.length; i++){
    var tdPeso = arrayDePacientes[i].querySelector(".info-peso"); //peso com tag;
    var tdAltura = arrayDePacientes[i].querySelector(".info-altura"); //altura com tag
    var tdIMC = arrayDePacientes[i].querySelector(".info-imc"); //imc com tag
    var peso = tdPeso.textContent; //retirada de tag td
    var altura = tdAltura.textContent; // retirada de tag td
    if(peso<0||peso>1000){
        if(altura<0 ||altura>3){
            tdIMC.textContent = "Peso e Altura Inválidos"
            //arrayDePacientes[i].style.color = "red"
            arrayDePacientes[i].classList.add("paciente-invalido")
        }else{
            tdIMC.textContent = "Peso Inválido"
            //arrayDePacientes[i].style.backgroundColor = "lightcoral"
            arrayDePacientes[i].classList.add("paciente-invalido")
        }
    }else if(altura<0 ||altura>3){
        tdIMC.textContent = "Altura Inválida"
        arrayDePacientes[i].classList.add("paciente-invalido")
    }else{
        tdIMC.textContent = calculaIMC(peso, altura); //retirada de tag e atribuição de calculo IMC direto no valor
    }
    
}

function calculaIMC(p, a){
    var imc = (p / a**2)
    return imc.toFixed(2)
}
