
let holaMundo = `Que tal 
mundo cruel`;

//console.log(holaMundo);

//boolean
let soltero:boolean = true; //false

//number
let novias = 12;

//string
let frasetion = "You're done";

let otraFrasetion = `El numero de novias es ${novias +1}`;

// arrays

let notas:number[]=[1,2,34,] //[]
let jaladas:Array<number> =[1,2,3]//[]

let nombre:any = "asd";
nombre = 12;

let usuario:UsuarioLogin = {
    nombre:"adrian",
    apellido:"eguez",
    direccion:"asd"
}
interface UsuarioLogin {
    nombre:string,
    apellido:string,
    direccion?:string
}
/*
class persona {
    nombre:string = "Nom"; //publico por defecto
    private apellido:string;
    public fechaNacimiento:Date;
    constructor(nombre:string,
                apellido:string,
                fechaNacimiento?:Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;

    }
}
*/


class Persona {
    nombre:string;
    apellido:string;
    fechaNacieminto:Date;

    constructor(nombre?:string,
                apellido?:string,
                fechaNacimiento?:Date){
    }

    public imprimirPersona():UsuarioLogin{
        console.log(this.nombre,this.apellido);
        this.imprimirNombre(this.nombre);
        return {
            nombre:this.nombre,
            apellido:this.apellido
        }
    }

    private imprimirNombre(nombre:string,
                           apellido?:string):void{
        if(apellido){
            console.log(nombre,apellido);
        }else{
            console.log(nombre);
        }


    }
}

function SumarNumeros(numero1:number,
                        numero2:number):number{
    return numero1 + numero2;
}

var objeto = {
    nombre:"adrian",
    imprimirNombre:function(){
        return this.nombre;
    }
};





let adrian:Persona = new Persona();

console.log(adrian.nombre,adrian.apellido,adrian.fechaNacieminto);

adrian.nombre = "Adrian";
adrian.apellido = "Eguez";
adrian.fechaNacieminto = new Date("1280-04-02");
//console.log(adrian);

adrian.imprimirPersona();
































