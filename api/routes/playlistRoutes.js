const express = require('express');
const router = express.Router();
const multer = require('multer');
const playlistController = require('../controllers/playlistController');

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get('/playlists', playlistController.getAllPlaylists);
router.post('/playlists', upload.single('arquivo_mp3'), playlistController.createPlaylist);

module.exports = router;
