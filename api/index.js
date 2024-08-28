const express = require('express');
const app = express();
const playlistRoutes = require('./routes/playlistRoutes');
require('dotenv').config();

// Middleware para parsing de JSON
app.use(express.json());

// Servindo arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rotas da API
app.use('/api', playlistRoutes);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

