import fs from 'fs';
import path from 'path';

const imagesDirectory = './'; // Change this to your images directory

const generateCertisFile = () => {
  const imageFiles = fs.readdirSync(imagesDirectory);

  const Certis = {};
  imageFiles.forEach((file, index) => {
    Certis[`image${index + 1}`] = new URL(path.join(imagesDirectory, file), import.meta.url).href;
  });

  const certisContent = `const Certis = ${JSON.stringify(Certis, null, 2)};\n\nexport default Certis;\n`;

  fs.writeFileSync('./Certis.jsx', certisContent);
};

generateCertisFile();
console.log('Certis.jsx file has been generated successfully.');
/**
 * run script:
 * node --experimental-specifier-resolution=node --experimental-json-modules generateCertisFile.mjs
 * 
 */