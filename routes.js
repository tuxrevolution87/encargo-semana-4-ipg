const express = require("express");
const router = express.Router();
let productos = require("./data");

// GET -> listar todos los productos
router.get("/", (req, res) => {
  res.json(productos);
});

// POST -> crear nuevo producto
router.post("/", (req, res) => {
  // Evita error si req.body está vacío
  const datos = req.body || {};
  const { nombre, precio, categoria } = datos;

  if (!nombre || typeof precio !== "number" || !categoria) {
    return res.status(400).json({ error: "Campos inválidos: nombre, precio (número) y categoria son obligatorios" });
  }

  const nuevo = {
    id: productos.length + 1,
    nombre,
    precio,
    categoria
  };

  productos.push(nuevo);
  res.status(201).json(nuevo);
});

// PUT -> actualizar producto existente
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);

  if (!producto) return res.status(404).json({ error: "Producto no encontrado" });

  // Evita error si req.body está vacío
  const datos = req.body || {};
  const { nombre, precio, categoria } = datos;

  if (nombre) producto.nombre = nombre;
  if (typeof precio === "number") producto.precio = precio;
  if (categoria) producto.categoria = categoria;

  res.json(producto);
});

// DELETE -> eliminar producto
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);

  if (index === -1) return res.status(404).json({ error: "Producto no encontrado" });

  const eliminado = productos.splice(index, 1);
  res.json(eliminado);
});

module.exports = router;
