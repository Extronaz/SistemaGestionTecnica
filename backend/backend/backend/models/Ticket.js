const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
        prioridad: {
            type: String,
            enum: ["Baja", "Media", "Alta"],
            default: "Media"
        },
        estado: {
            type: String,
            enum: ["Abierto", "En proceso", "Resuelto"],
            default: "Abierto"
        },
        fechaCreacion: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false
    }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
