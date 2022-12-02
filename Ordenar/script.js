let numero1
let numero2
let numero3
let resultado = ""


function ordenar(){
    numero1 = document.getElementById("numero1").value
    numero2 = document.getElementById("numero2").value
    numero3 = document.getElementById("numero3").value

    if (numero1 < numero2 & numero1 < numero3){
        resultado += numero1 + ", "

        if (numero2 < numero3){
            resultado += numero2 + ", " + numero3
        }

        else{
            resultado += numero3 + ", " + numero2
        }
    }
    if (numero2 < numero1 & numero2 < numero3){
        resultado += numero2 + ", "
        if (numero1 < numero3){
            resultado += numero1 + ", " + numero3
        }

        else{
            resultado += numero3 + ", " + numero1
        }
    }
    if (numero3 < numero1 & numero3 < numero2){
        resultado += numero3 + ", "
        if (numero2 < numero1){
            resultado += numero2 + ", " + numero1
        }

        else{
            resultado += numero1 + ", " + numero2
        }
    }

    document.getElementById("resultado").value = resultado
}