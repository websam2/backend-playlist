const connection = require('../config/db');
const path = require('path');

// Lista todas as músicas
exports.getAllPlaylists = (req, res) => {
  connection.query('SELECT * FROM playlists', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Cria uma nova música na playlist
exports.createPlaylist = (req, res) => {
  const { nome, descricao } = req.body;
  const arquivo_mp3 = req.file ? req.file.filename : null;

  const sql = 'INSERT INTO playlists (nome, descricao, arquivo_mp3) VALUES (?, ?, ?)';
  connection.query(sql, [nome, descricao, arquivo_mp3], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Música adicionada com sucesso!', id: result.insertId });
  });
};

// Outras operações de CRUD (update, delete, etc.)
