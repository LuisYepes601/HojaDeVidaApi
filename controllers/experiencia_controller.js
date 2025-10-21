const ExperienciaService = require('../services/experiencias_service');

// Crear experiencia
exports.crearExperiencia = async (req, res) => {
  try {
    const nueva = await ExperienciaService.crearExperiencia(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las experiencias
exports.obtenerExperiencias = async (req, res) => {
  try {
    const lista = await ExperienciaService.obtenerExperiencias();
    res.json(lista);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener experiencias por usuarioReferencia
exports.obtenerPorUsuario = async (req, res) => {
  try {
    const lista = await ExperienciaService.obtenerPorUsuario(req.params.usuarioReferencia);
    res.json(lista);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar experiencia
exports.actualizarExperiencia = async (req, res) => {
  try {
    const actualizado = await ExperienciaService.actualizarExperiencia(req.params.id, req.body);
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar experiencia
exports.eliminarExperiencia = async (req, res) => {
  try {
    await ExperienciaService.eliminarExperiencia(req.params.id);
    res.json({ message: 'Experiencia eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
