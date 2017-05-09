/**
 * Created by USRDEL on 9/5/17.
 */


//Template Strings
var nombreUsuario = "Adrian Eguez"

var htmlES6 = `
<h1>Hola  </h1>
<p>Hola maigos como estan </p>
`
htmlES6

console.log(`
<h1>Hola  ${nombreUsuario} </h1> 
<p>Hola maigos como estan </p>
`)

var htmlES5 = "<h1>Hola "+nombreUsuario+"</h1>"
    +"<p>Hola maigos como estan </p>"


htmlES5