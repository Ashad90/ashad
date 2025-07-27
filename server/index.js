import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
// Utilise le port 3001 par défaut. Pour changer, lance avec: node server/index.js PORT=xxxx
const PORT = 3001;

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pour la démo, on sert un fichier local. Remplacez par un lien Canva ou cloud si besoin.
app.get('/api/download-cv', (req, res) => {
  // Pour Canva, redirigez simplement :
  // return res.redirect('https://www.canva.com/design/your-cv-link');

  // Pour un fichier local (ex: public/cv.pdf)
  const file = path.join(__dirname, '../public/cv.pdf');
  res.download(file, 'Ashad-CV.pdf');
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
}); 