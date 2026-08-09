const express = require("express");

const app = express();

app.use(express.json());

const tickets = [];

app.get("/", (req, res) => {
    res.json({
        mensaje: "API del Sistema de Gestión de Incidentes funcionando correctamente"
    });
});

app.get("/api/tickets", (req, res) => {
    res.json(tickets);
});

app.post("/api/tickets", (req, res) => {
    const nuevoTicket = {
        id: tickets.length + 1,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        estado: req.body.estado || "Abierto",
        fechaCreacion: new Date()
    };

    tickets.push(nuevoTicket);

    res.status(201).json({
        mensaje: "Ticket creado correctamente",
        ticket: nuevoTicket
    });
});

app.put("/api/tickets/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const ticket = tickets.find(ticket => ticket.id === id);

    if (!ticket) {
        return res.status(404).json({
            mensaje: "Ticket no encontrado"
        });
    }

    ticket.titulo = req.body.titulo || ticket.titulo;
    ticket.descripcion = req.body.descripcion || ticket.descripcion;
    ticket.estado = req.body.estado || ticket.estado;

    res.json({
        mensaje: "Ticket actualizado correctamente",
        ticket
    });
});

app.delete("/api/tickets/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = tickets.findIndex(ticket => ticket.id === id);

    if (index === -1) {
        return res.status(404).json({
            mensaje: "Ticket no encontrado"
        });
    }

    tickets.splice(index, 1);

    res.json({
        mensaje: "Ticket eliminado correctamente"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
