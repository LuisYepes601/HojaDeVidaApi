
const User = require('../models/user');

async function crear(datos) {
  return await User.create(datos);
}

async function listar() {
  return await User.find();
}

async function buscarPorCorreo(correo) {
  return await User.findOne({ correo });
}

async function eliminarPorId(id) {
  return await User.findByIdAndDelete(id);
}

module.exports = { crear, listar, buscarPorCorreo, eliminarPorId };
