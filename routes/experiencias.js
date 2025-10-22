const express = require('express');
const router = express.Router();
const experienciaController = require('../controllers/experiencia_controller');

// 👉 Crear una nueva experiencia
router.post('/crear/', experienciaController.crearExperiencia);

// 👉 Obtener todas las experiencias
router.get('/', experienciaController.obtenerExperiencias);

// 👉 Obtener experiencias filtradas por el campo usuarioReferencia
router.get('/usuario/:usuarioReferencia', experienciaController.obtenerPorUsuario);

// 👉 Actualizar una experiencia existente
router.put('/actualizar/:id', experienciaController.actualizarExperiencia);

// 👉 Eliminar una experiencia por ID
router.delete('/eliminar/:id', experienciaController.eliminarExperiencia);

module.exports = router;
