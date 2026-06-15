const express = require("express");
const app = express();
const rutas = require("./routes");

app.use(express.json()); // Middleware para JSON
app.use("/api/productos", rutas);

// Ruta raíz con mensaje en HTML
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Servidor Express</title>
      </head>
      <body style="font-family: Arial; text-align: center; margin-top: 69px;">
        <h1 style="color: orange;">😸 El server está corriendo bien 😸</h1>
        <p>Bienvenido a la API de Tareas con Express.js</p>
      </body>
    </html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("El servidor está funcionando correctamente 😸 en http://localhost:" + PORT);
  });
