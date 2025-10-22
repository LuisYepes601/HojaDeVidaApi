const ExperienciaService = require('../services/experiencias_service');

// Crear experiencia
exports.crearExperiencia = async (req, res) => {
  try {
    const nueva = await ExperienciaService.crearExperiencia(req.body);
    res.status(201).json({ message: "Experiencia creada correctamente" });
  } catch (error) {
    res.status(400).json({ message: "Los campos no pueden quedar vacíos" });
    res.status(500).json({ message: "Error interno del servidor" });
    ;
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

    const usuarioRef = req.params.usuarioReferencia;
    if (!usuarioRef) {
      res.status(400).json({ message: "Los campos no pueden quedar vacíos" });
    }
    const lista = await ExperienciaService.obtenerPorUsuario(usuarioRef);


    if (!lista || lista.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(lista);
  } catch (error) {

    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Actualizar experiencia
exports.actualizarExperiencia = async (req, res) => {
  try {

    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "El ID no puede quedar vacío" });
    }

    const body = req.body;
    if (!body || Object.keys(body).length === 0) {
      return res.status(400).json({ message: "Los campos no pueden quedar vacíos" });
    }

    const actualizado = await ExperienciaService.actualizarExperiencia(id, body);

    if (!actualizado) {
      return res.status(404).json({ message: "Experiencia no encontrada" });
    }


    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ message: "experiencia no encontrada" });
  }
};

// Eliminar experiencia
exports.eliminarExperiencia = async (req, res) => {
  try {

    id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "El ID no puede quedar vacío" });
    }

    await ExperienciaService.eliminarExperiencia(id);
    res.json({ message: 'Experiencia eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
