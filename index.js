// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola desde Node.js!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Aplicación escuchando en http://localhost:${port}`);
});
