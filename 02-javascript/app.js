/*
    comentarios de varias lineas
 */

// Comentarios una sola linea

console.log('Hello Kitty');

var adrian = {
    nombre:"adrian",
    apellido:"eguez",
    fechaNacimiento: new Date(),
    imprimir:function () {
        console.log(this.apellido,this.nombre);
    },
    ano:function () {
        return this.fechaNacimiento.getFullYear()
    },
    diferenciaEdad:function(edadAComparar){
        //return Math.abs(edadAComparar-this.fechaNacimiento.getFullYear())
        var resultado = edadAComparar-this.fechaNacimiento.getFullYear();

        if(resultado<0){
            return resultado*-1
        }else{
            return resultado
        }


    }
};

console.log(adrian.ano());

console.log(adrian.diferenciaEdad(1090));




