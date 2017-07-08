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

module.exports.bootstrap = function(cb) {
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
          cb();
        }else{
          console.log("Aplicar el hash")
          cb();
        }
      }
    });
};
