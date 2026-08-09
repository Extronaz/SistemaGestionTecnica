const mongoose = require("mongoose");

const conectarBaseDatos = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/sistema_incidentes");

        console.log("Conexión exitosa con MongoDB");
    } catch (error) {
        console.error("Error al conectar con MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = conectarBaseDatos;
