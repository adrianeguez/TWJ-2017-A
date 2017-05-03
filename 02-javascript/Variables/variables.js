// variables.js

// En JavaScript se define
// una variable con la
// palabra reservada
// <var>

// ENTEROS

var dos = 2;
var tres = 3;
var quince = 15;
var diezYSiete = 17;

console.log(dos);
console.log(tres);
console.log(quince);
console.log(diezYSiete);

// Float

var dosPuntoCinco = 2.5;
console.log(dosPuntoCinco);

//
// Todas las demas

var verdaderoOFalso = true;
var falso = false;
var nombre = 'Adrian';
var negativo = -4;
var fechaNacimiento = new Date();

var cuatroString = '4';
cuatroString = 4;
cuatroString = true;
cuatroString = false;
cuatroString = -5432;
cuatroString = new Date();
cuatroString = undefined;
cuatroString = null;

console.log(cuatroString);

var variable;

console.log(variable);

var numero2 = 2;
console.log(typeof numero2);


// OBJETOS JSON

var adrian = {
    id:1,
    nombre:'Adrian',
    createdAt: new Date(),
    updatedAt: new Date(),
    casado:true,
    prestamos:false,
    hijos:null,
    altura:1.78,
    negativo:-1,
    mascota:{
        nombre:'Cachetes',
        fechaNacimiento:new Date()
    }
};
console.log('OBJETO:',adrian)



console.log(adrian.mascota.fechaNacimiento)


console.log('Altura: ',adrian.altura);

adrian.altura = 1.48;

console.log('Altura: ',adrian.altura);

adrian.altura = {
    ancho:2.4,
    alto:1.79
};

console.log('Altura: ',adrian.altura);

// Borrando atributos o propiedades
// del objeto
delete adrian.altura;

// Anadiendo atributos o propiedades
// al objeto

adrian.juegos = 'varios'

console.log('Objeto',adrian);

var arreglo = [
    1,
    'adr',
    2.4,
    false,
    true,
    null,
    undefined,
    new Date(),
    -3412,
    {
        a:'b'
    }];

console.log(arreglo[4]);

var nuevoObjeto = {
    papas:['chola','chaucha','maria'],
    cebollas:['paitena','perla','blanca']
};

console.log(nuevoObjeto.papas[1]);


var matriz = [[0,1],[2,3]];

console.log(matriz[0][0]); //0



var arrregloDeObjetos = [
    {
        id:1,
        nombre:'Adrian'
    },
    {
        id:2,
        nombre:'Felipe'
    }
];

// splice(
// 'Delimita la posisicion en la que vamos a trabajar',
// 'Numero Objetos a eliminarse')

console.log('Antes:',arrregloDeObjetos)
arrregloDeObjetos.splice(0,1)
console.log('Despues:',arrregloDeObjetos)

arrregloDeObjetos.splice(0,0,{id:3,nombre:'Carmen'})
console.log('Despues2:',arrregloDeObjetos)






















