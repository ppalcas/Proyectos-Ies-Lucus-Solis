let numeroAAñadir = "1"
let numero1 = ""
let numero2 = ""
let operacion 
let texto = ""
            
function escribir(valor){
    
    if (numeroAAñadir == "1"){
        numero1 += valor
        
        document.getElementById("mostrarResultado").value = (numero1)     
    }
    if (numeroAAñadir == "2")
    {
        numero2 += valor
        document.getElementById("mostrarResultado").value = (texto + numero2)
    }
    
}

function suma()
{   
    
    alert(numero1)
    texto += numero1
    texto += " + "
    operacion = "suma"
    document.getElementById("mostrarResultado").value =  texto 
    numeroAAñadir = "2"
    escribir(valor)
}

function resta(){
    texto += numero1
    texto += " - "

    operacion = "resta"
    document.getElementById("mostrarResultado").value = texto
    numeroAAñadir = "2"
    escribir(valor)    
}

function multiplicacion(){
    texto += numero1
    texto += " x "

    operacion = "multiplicacion"
    document.getElementById("mostrarResultado").value = texto
    numeroAAñadir = "2"
    escribir(valor)
}

function division(){
    texto += numero1
    texto += " / "

    operacion = "division"
    document.getElementById("mostrarResultado").value = texto
    numeroAAñadir = "2"
    escribir(valor)
          
}

function resultado(){


    if (operacion == "suma"){
        document.getElementById("mostrarResultado").value = (parseInt(numero1) + parseInt(numero2))
        numero1 = (parseFloat(numero1) + parseFloat(numero2))
        numero2 = 0
        texto = ""
        escribir(valor)
    }
    if (operacion == "resta"){
        document.getElementById("mostrarResultado").value = (parseInt(numero1) - parseInt(numero2))
        numero1 = (parseFloat(numero1) - parseFloat(numero2))
        numero2 = 0
        texto = ""
        escribir(valor)   
    }
    if (operacion == "multiplicacion"){
        document.getElementById("mostrarResultado").value = (parseInt(numero1) * parseInt(numero2))
        numero1 = (parseFloat(numero1) * parseFloat(numero2))
        numero2 = 0
        texto = ""
        escribir(valor)

    }
    if (operacion == "division"){
        document.getElementById("mostrarResultado").value = (parseInt(numero1) / parseInt(numero2))
        numero1 = (parseFloat(numero1) / parseFloat(numero2))
        numero2 = 0
        texto = ""
        escribir(valor)
    }
    
}

function AC(){
    numeroAAñadir = "1"
    numero1 = 0
    numero2 = 0
    document.getElementById("mostrarResultado").value = 0
    escribir(valor) 
}

function decimal(){
    if (numeroAAñadir = "1"){
        numero1 += "."
        escribir(valor)
    }
}
