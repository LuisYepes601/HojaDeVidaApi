// services/experienciaService.js
const ExperienciaRepository = require('../repositories/experiencias_Repo');

const ExperienciaService = {
  async crearExperiencia(data) {
    return await ExperienciaRepository.crear(data);
  },

  async obtenerExperiencias() {
    return await ExperienciaRepository.obtenerTodas();
  },

  async obtenerPorUsuario(usuarioReferencia) {
    return await ExperienciaRepository.obtenerPorUsuario(usuarioReferencia);
  },

  async actualizarExperiencia(id, data) {
    return await ExperienciaRepository.actualizar(id, data);
  },

  async eliminarExperiencia(id) {
    return await ExperienciaRepository.eliminar(id);
  }
};

module.exports = ExperienciaService;
