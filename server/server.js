require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Configuración de CORS
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],  // Cambiado 'METHODS' a 'methods'
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Conectar a MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB is connected'))
    .catch(e => console.log(e));

// Manejo de errores
app.use((err, req, res, next) => {  // Corregido la sintaxis de la función
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong", // Reemplaza con tu propio mensaje de error
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
