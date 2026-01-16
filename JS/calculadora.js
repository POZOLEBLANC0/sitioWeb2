let pantalla = document.getElementById('pantalla');
let expresion = '';


const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
    boton.addEventListener('click', function() {
        const valor = this.id;
        
        if (valor === '=') {
       
            try {
                expresion = eval(expresion).toString();
                pantalla.value = expresion;
            } catch (error) {
                pantalla.value = 'Error';
                expresion = '';
            }
        } else if (valor === 'C') {
            
            expresion = '';
            pantalla.value = '';
        } else {
           
            expresion += valor;
            pantalla.value = expresion;
        }
    });
});