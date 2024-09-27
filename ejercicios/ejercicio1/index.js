console.log("Calculadora iniciada!");

// Definimos las funciones de operaciones
let entradaActual = ''

document.querySelector('#btn1').addEventListener('click', () => {
    console.log('1')
    entradaActual += '1';
    document.querySelector('#pantalla').textContent = entradaActual;
})

document.querySelector('#btn2').addEventListener('click', () => {
    entradaActual += '2';
    document.querySelector('#pantalla').textContent = entradaActual;
})

document.querySelector('#btn3').addEventListener('click', () => {
    console.log('3')
    entradaActual += '3';

    document.querySelector('#pantalla').textContent = entradaActual;
})

document.querySelector('#btn4').addEventListener('click', () => {
    console.log('4')
    entradaActual += '4';

    document.querySelector('#pantalla').textContent = entradaActual;
})

document.querySelector('#btn5').addEventListener('click', () => {
    console.log('5')
    entradaActual += '5';

    document.querySelector('#pantalla').textContent = entradaActual;
})

document.querySelector('#btn6').addEventListener('click', () => {
    console.log('6')
    entradaActual += '6';

    document.querySelector('#pantalla').textContent = entradaActual;
})

document.querySelector('#btn7').addEventListener('click', () => {
    console.log('7')
    entradaActual += '7';

    document.querySelector('#pantalla').textContent = entradaActual;
})

document.querySelector('#btn8').addEventListener('click', () => {
    console.log('8')
    entradaActual += '8';

    document.querySelector('#pantalla').textContent =entradaActual;
})

document.querySelector('#btn9').addEventListener('click', () => {
    console.log('9')
    entradaActual += '9';

    document.querySelector('#pantalla').textContent = entradaActual;
})

document.querySelector('#btn0').addEventListener('click', () => {
    console.log('0')
    entradaActual += '0';
    document.querySelector('#pantalla').textContent = entradaActual;
})

document.querySelector('#btnSuma').addEventListener('click', function() {
    entradaActual += '+';
    document.querySelector('#pantalla').textContent = entradaActual;
  });

  document.querySelector('#btnResta').addEventListener('click', function() {
    entradaActual += '-';
    document.querySelector('pantalla').textContent = entradaActual;
  });
  
document.querySelector('#btnIgual').addEventListener('click', function() {
   try{
    if(entradaActual !== ''){
        const resultado = eval(entradaActual)
        document.querySelector('#pantalla').textContent = resultado;

    }else{
        console.log('No hay operación a realizar')
    }
   }catch(error){
    console.log('Error en la operación')
    console.error(error)
    document.querySelector('#pantalla').textContent = 'Error';
   }
  });

 
document.querySelector('#btnBorrar').addEventListener('click', function() {
    entradaActual = '';
    document.querySelector('#pantalla').textContent = '0';
  });

