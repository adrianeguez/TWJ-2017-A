/**
 * UsuarioMascota.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

//DuenosDeMascota

module.exports = {

  attributes: {
    idUsuario:{
      model:"Usuario"//Tabla papa
    },
    idMascota:{
      model:"Mascota"//Tabla papa
    },
    fechaDeInicioAdopcion:{
      type:"date"
    },
    fechaDeFinalizacionAdopcion:{
      type:"date"
    }
  }
};

