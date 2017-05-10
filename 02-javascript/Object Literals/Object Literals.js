/**
 * Created by USRDEL on 10/5/17.
 */

var nuevaFuncion = (nombre,apellido)=>{
    var usuario1 = {
        nombre:nombre,
        apellido
    };
    console.log('Hola' +usuario1.nombre+usuario1.apellido);

    var usuario2 = {
        nombre
    };
    console.log(usuario2.nombre);
}

nuevaFuncion('Adrian', 'Eguez')
