/**
 * Created by USRDEL on 9/5/17.
 */
// FAT ARROW FUNCTIONS
var holaMundo = function(){ console.log("Hola mundo")}

holaMundo()

var holaMundo2 = ()=>{ return "Hola mundo2" }
holaMundo2()

var holaMundo3 = ()=> holaMundo2()
holaMundo3()

var holaMundo4 = (nombre)=> `Hola: ${nombre}`

holaMundo4('Fabian')


var holaMundo5 = apellido => `Hola: ${apellido}`

holaMundo5('Eguez')

var holaMundo6 =
    (nombre,apellido) => `Sr. ${apellido} ${nombre}`

holaMundo6('Vicente','Eguez')

