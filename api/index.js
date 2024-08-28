const express = require('express');
const app = express();
const playlistRoutes = require('./routes/playlistRoutes');
require('dotenv').config();

// Middleware para parsing de JSON
app.use(express.json());

// Rotas da API
app.use('/api', playlistRoutes);

// Servindo o formulário
app.use(express.static('public'));

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
