const fs = require('fs');
const path = require('path');

const base64Png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
const buffer = Buffer.from(base64Png, 'base64');

const files = [
  'assets/icon.png',
  'assets/splash.png',
  'assets/adaptive-icon.png',
  'assets/favicon.png'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  fs.writeFileSync(filePath, buffer);
  console.log(`Created ${file}`);
});
