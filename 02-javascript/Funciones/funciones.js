
// void

function holaMundo(){
    console.log('Hola mundo');
}
holaMundo();

// El doble de un entero

function doble(numero){
    return numero*2;
}
console.log(doble(2)); //4

// Devuelva mult 2 num.

function multiplicar2(a,b){
    return a*b;
}
console.log(multiplicar2(4,3));//12

var dos = multiplicar2(1,2);

console.log(dos);

var multiplicacion = multiplicar2;

console.log(multiplicacion(4,6));

// VOID

var hola = function(){
    console.log('hola')
}

hola(); //hola

console.log(hola()); // undefined

var resultado = hola();
console.log(resultado); // undefined

console.log('Hola: ',hola);

function hazAlgo(algo){
    algo()
}

hazAlgo(function(){ console.log('Hola')});
hazAlgo(function(){ return 2});

function transformarNumero(numero,transformacion){
    transformacion(numero);
}

transformarNumero(5,function (numero)  {
    return numero * 2;
})

transformarNumero(8,function (numero)  {
    return numero / 2;
})



