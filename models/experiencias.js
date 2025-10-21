const mongoose = require('mongoose');


const experienciaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  empresa: { type: String, required: true },
  periodo: { type: String, required: true },
  ubicacion: { type: String, required: true },
  descripcion: { type: String, required: true },
  logros: { type: String },        // Ejemplo: "Diseño responsivo, Integración de funcionalidades"
  tecnologias: { type: String },   // Ejemplo: "HTML5, CSS3, JavaScript, Git, GitHub"
  usuarioReferencia: { type: String, required: true }, // 🔹 ID, nombre o correo del usuario
  fechaRegistro: { type: String, default: new Date().toISOString() }
});

module.exports = mongoose.model('Experiencia', experienciaSchema);
