/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var Passwords = require('machinepack-passwords');
module.exports = {
  attributes: {

    nombre:{
      type:'string'
    },
    correo:{
      type:'email'
    },
    password:{
      type:'string',
      required:true
    },
    duenosMascotas:{
      collection:"UsuarioMascota",
      via:"idUsuario"
    }

  },
  beforeCreate:function (usuario,cb) {

    //if(usuario.password){
      Passwords.encryptPassword({
        password: usuario.password
      })
        .exec(
          {
            error: function (err) {
              cb("Error en hash password",err)
            },
            success: function (hashedPassword) {
              usuario.password = hashedPassword;
              cb()
            },
          });
    //}else{
      //cb()
    //}


  },
  beforeUpdate:function (valorAActualizar,cb) {
    if(valorAActualizar.password){
    Passwords.encryptPassword({
      password: valorAActualizar.password
    })
      .exec(
        {
          error: function (err) {
            cb("Error en hash password",err)
          },
          success: function (hashedPassword) {
            valorAActualizar.password = hashedPassword;
            cb()
          },
        });
    }else{
    cb()
    }


  }

};

