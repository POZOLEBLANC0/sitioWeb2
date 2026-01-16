function mostrarAlerta() {
    alert("¡Bienvenido a mi sitio web!");
    console.info("Ejemplo de funcion");
}

function suma(){
let valor1 = 5;
let valor2 = 10
let resultado = valor1 + valor2;
console.info("El resultado de la suma es: " + resultado);
}

function suma(a, b){
    let resultado = a + b;
    console.info("El primer valor es: " + a);
    console.info("El segundo valor es: " + b);

    return resultado;
}

function sumarInputValues() {
    let val1 = document.getElementById("valor1").value;
    let val2 = document.getElementById("valor2").value;
    let resultado = parseFloat(val1) + parseFloat(val2);
    console.info("El resultado de la suma de los inputs es: " + resultado);
    if(resultado >10){
       document.getElementById("mensaje").value = "Resultado mayor a 10";
    }else{
       document.getElementById("mensaje").value = "El resultado es menor o igual que 10";
    }
}