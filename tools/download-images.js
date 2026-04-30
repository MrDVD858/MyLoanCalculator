
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://raw.githubusercontent.com/MrDVD858/myloancalcs-assets/main';
const publicDir = path.join(__dirname, '..', 'public');

const filesToDownload = [
  'favicon.ico',
  'og-image.png'
];

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const downloadFile = (filename) => {
  const url = `${baseUrl}/${filename}`;
  const dest = path.join(publicDir, filename);
  
  console.log(`Downloading ${filename}...`);
  
  https.get(url, (response) => {
    if (response.statusCode !== 200) {
      console.error(`Failed to download ${filename}: HTTP Status ${response.statusCode}`);
      return;
    }
    
    const file = fs.createWriteStream(dest);
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Successfully downloaded ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
    fs.unlink(dest, () => {}); // Delete the file async if error occurs
  });
};

filesToDownload.forEach(downloadFile);
