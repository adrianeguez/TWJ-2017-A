/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */


var Passwords = require('machinepack-passwords');

module.exports.bootstrap = function(cb) {

  /*
  console.log("Antes de levantar");
  Usuario
    .findOne({
      correo:"marcelo@marcelo.com"
    })
    .exec(function (err,usuarioEncontrado) {
      if(err) cb("error");
      if(!usuarioEncontrado){
        cb("No existe el usuario");
      }else{
        if(usuarioEncontrado.password=="123456"){
          console.log("No aplicado el hash")

          Passwords.encryptPassword({
            password: usuarioEncontrado.password,
          }).exec({
            error: function (err) {
              cb("Error de encripcion");
            },
            success: function (passwordMarcelo) {

              Usuario
                .update(
                  {
                    id:usuarioEncontrado.id
                  },
                  {
                    password:passwordMarcelo
                  }
                )
                .exec(function (err,marceloActualizado) {
                  if(err) return cb(err);
                  if(!marceloActualizado){
                    cb("Marcelo no existe")
                  }else{
                    console.log("Sails levantado");
                    cb();
                  }

                })
            },
          });

        }else{
          console.log("Aplicar el hash")
          cb();
        }
      }
    });
  */
  cb() //Aqui se levanta el sails

};
