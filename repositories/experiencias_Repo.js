const Experiencia = require('../models/experiencias');

const ExperienciaRepository = {
  // Guardar una experiencia
  async crear(experienciaData) {
    const experiencia = new Experiencia(experienciaData);
    return await experiencia.save();
  },

  // Obtener todas las experiencias
  async obtenerTodas() {
    return await Experiencia.find();
  },

  // Buscar por ID
  async obtenerPorId(id) {
    return await Experiencia.findById(id);
  },

  // Buscar por usuarioReferencia
  async obtenerPorUsuario(usuarioReferencia) {
    return await Experiencia.find({ usuarioReferencia });
  },

  // Actualizar por ID
  async actualizar(id, data) {
    return await Experiencia.findByIdAndUpdate(id, data, { new: true });
  },

  // Eliminar por ID
  async eliminar(id) {
    return await Experiencia.findByIdAndDelete(id);
  }
};

module.exports = ExperienciaRepository;