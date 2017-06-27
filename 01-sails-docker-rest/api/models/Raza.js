/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

// http://localhost:1337/Raza/create?nombre=Bulldog&fechaNacimiento=2016-12-24
// CREAR REGISTROS

//http://localhost:1337/Raza?limit=2
// DEFINIR EL NUMERO DE REGISTROS QUE QUEREMOS QUE NOS DEVUELVA EL SAILS

//http://localhost:1337/Raza?skip=2
// DEFINIR EL NUMERO DE REGISTROS QUE SE VA A SALTAR EL SAILS (2 REGISTROS NO NOS VA A TRAER)


module.exports = {

  attributes: {
    nombre:{
      type:"string"
    },
    listaMascotasDeRaza:{
      collection: 'Mascota', //Es el nombre del MODELO a relacionar (hijo)
      via: 'idRaza' //Es el nombre del FOREIGN KEY
    }

  }
};

