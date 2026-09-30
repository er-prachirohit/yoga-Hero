const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME.trim(),
  api_key: process.env.CLOUDINARY_API_KEY.trim(),
  api_secret: process.env.CLOUDINARY_API_SECRET.trim()
});

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(file => file.match(/\.(png|jpg|jpeg|arw|webp)$/i));

async function uploadImages() {
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    try {
      console.log(`Uploading ${file}...`);
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'escape_in_yoga',
        use_filename: true,
        unique_filename: false,
        overwrite: true
      });
      console.log(`Uploaded ${file} -> ${result.secure_url}`);
    } catch (error) {
      console.error(`Failed to upload ${file}:`, error);
    }
  }
  console.log('All done!');
}

uploadImages();
