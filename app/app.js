require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('../config/db');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.use('/api', require('../routes/users'));


app.get('/', (req, res) => {
  res.send('🚀 API Hoja de Vida funcionando correctamente');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en puerto ${PORT}`));
