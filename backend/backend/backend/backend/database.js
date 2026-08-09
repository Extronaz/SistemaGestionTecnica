const mongoose = require("mongoose");
require("dotenv").config();

const conectarBaseDatos = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Conexión exitosa con MongoDB");
    } catch (error) {
        console.error("Error al conectar con MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = conectarBaseDatos;
