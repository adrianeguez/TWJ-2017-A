/**
 * Created by USRDEL on 10/5/17.
 */
// FOR EACH
// OPERADORES

let arreglo = [8,6,9,10,4,2,7,8];

let resultado = arreglo.map((valor,indice)=>{
    return valor;
});
console.log(resultado);



let arregloUsuarios = [{
    nombre:"Adrian"
},{
    nombre:"Maria"
}];

let nuevoArreglo = arregloUsuarios.map((usuario)=>{
    usuario.nombre = "Sr. o Sra. "+usuario.nombre
    usuario.fechaCreacion = new Date();
    usuario.anoCreacion = usuario.fechaCreacion.getFullYear()
    return usuario;
});

console.log(nuevoArreglo);